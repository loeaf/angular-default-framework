# 1. 기존 Nginx 컨테이너 중지
docker stop 646027d2ef44

# 2. 컨테이너 삭제
docker rm 646027d2ef44

# 3. (선택적) Nginx 이미지 삭제
docker rmi nginx

docker stop nginx || true && docker rm nginx || true && docker rmi nginx
docker stop $(docker ps | grep ':9000' | awk '{print $1}')


# 4. Nginx 설정 파일 생성
cat > nginx.conf << 'EOF'
server {
    listen 80;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
        expires -1;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }

    error_page 404 /index.html;
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}
EOF

# 5. 새 Nginx 컨테이너 실행
docker run -d \
  --name nginx \
  -p 50012:80 \
  -v /home/dosiwa/nginx/html:/usr/share/nginx/html:ro \
  -v $(pwd)/nginx.conf:/etc/nginx/conf.d/default.conf:ro \
  nginx

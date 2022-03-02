import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as moment from 'moment';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AppSeoService {

  constructor(private title: Title, private meta: Meta, @Inject(PLATFORM_ID) private platformId: Object ) { }

  setSeoData(data: SeoData) {
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'author', content: data.author });
    this.meta.updateTag({ name: 'keywords', content: data.keywords });
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:site_name', content: data.site_name });
    this.meta.updateTag({ property: 'og:url', content: data.site_url });
    this.meta.updateTag({ property: 'og:images', content: data.src });
    this.meta.updateTag({ property: 'og:images:alt', content: data.description });
    this.meta.updateTag({ property: 'og:images:width', content: '900' });
    this.meta.updateTag({ property: 'og:images:height', content: '420' });

    // 기존 태그들을 삭제
    this.meta.removeTag("rel='icon'");
    this.meta.removeTag("rel='apple-touch-icon'");
    this.meta.removeTag("rel='manifest'");

    // favicon 및 기타 링크 추가
    this.meta.addTag({ rel: 'icon', href: 'https://omb.loeaf.com/assets/icon/favicon.ico' });
    this.meta.addTag({ rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://omb.loeaf.com/assets/icon/favicon-16x16.ico' });
    this.meta.addTag({ rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://omb.loeaf.com/assets/icon/favicon-32x32.ico' });
    this.meta.addTag({ rel: 'apple-touch-icon', sizes: '180x180', href: 'https://omb.loeaf.com/assets/icon/apple-touch-icon.png' });
    this.meta.addTag({ rel: 'manifest', href: 'https://omb.loeaf.com/assets/icon/site.webmanifest' });
  }

  setJsonLd(seoData: SeoData) {
    // JSON-LD 형식으로 데이터 생성
    const currentDateTime = moment().format('YYYY-MM-DDTHH:mm:ssZ');
    var jsonData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "headline": seoData.title,
      "datePublished": "2023-11-07T09:00:00+08:00",
      "dateModified": currentDateTime,
      "name": seoData.title,
      "description": seoData.description,
      "image": seoData.src,
      "author": {
        "@type": "Organization",
        "name": seoData.author
      },
      "keywords": seoData.keywords,
      "url": seoData.site_url // 웹 페이지의 URL을 여기에 넣으세요.
    };

    // 기존 JSON-LD 스크립트 제거
    const existingJsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (existingJsonLdScript) {
      existingJsonLdScript.remove();
    }

    const jsonLdScriptElement = document.createElement('script');
    jsonLdScriptElement.type = 'application/ld+json';
    jsonLdScriptElement.textContent = JSON.stringify(jsonData);
    document.head.appendChild(jsonLdScriptElement);

    return jsonData;
  }
  // 언어 변경 함수
  changeLanguage(lang: string) {
    if(isPlatformBrowser(this.platformId)) {
      document.documentElement.lang = lang; // <html> 요소의 lang 속성 변경
    }
  }

}

interface SeoData {
  author: string;
  keywords: string;
  title: string;
  description: string;
  site_name: string;
  site_url: string;
  src: string;
}

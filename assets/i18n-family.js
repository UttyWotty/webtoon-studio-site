/*
 * The family-webtoon page's text in English and Korean: price, photo guide, how to send photos, consent and privacy.
 * Keys are filled into family.html's data-i18n elements by app.js, merged over the main page's text from i18n.js.
 * Lists use "|" between items; the consent and privacy wording is what client-job close carries out after delivery.
 */

export const FAMILY_TEXT = {
  en: {
    fam_link: "Photo guide and consent terms",
    fam_title: "Your family as a webtoon",
    fam_lead: "A 10-12 panel strip starring your family, drawn from your photos and lettered in Korean and English. Here is what to send, what you agree to, and how your photos are handled.",
    fam_sample_title: "Sample: First Ride",
    fam_sample_lead: "A 10-panel sample in the clean manhwa style. The family is invented: we never show a client's family without their written permission. Switch the language at the top to read it in Korean.",
    fam_price_title: "Price and time",
    fam_price: "150,000 KRW for one or two people, plus 50,000 KRW for each extra person (about $110, plus $35 a person). Ready 3 to 5 days after you approve the character sheet.",
    photos_title: "Photos that work",
    photos_points: "15 to 30 photos of each person, taken in the last year or two|Faces clear and in focus, in daylight or good indoor light|Different angles: straight on and three-quarter, some smiling and some not|Each person alone in most photos; a few group photos help too|No sunglasses, masks, heavy filters or beauty apps|Original files, not screenshots or photos re-sent through a messenger, which are compressed",
    send_title: "How to send them",
    send_body: "Put the photos in a shared folder (Google Drive, Naver MYBOX or similar) with one sub-folder per person, and send the link with your order. Please never post photos of children publicly to reach us.",
    consent_title: "What you agree to",
    consent_points: "Every adult in the photos has agreed, and you are the parent or legal guardian of every child in them, or have that parent's consent|The photos show your own family or people who agreed; no public figures and no one who has not agreed|The webtoon will not be used to embarrass, deceive or harm anyone; we do not draw sexual or violent content of real people|We may decline an order that breaks these points",
    privacy_title: "How we handle your photos",
    privacy_points: "Used only to make your order: to train a private likeness model for each person and to draw your strip|Kept on our own machine; not uploaded to any outside AI service, not shared, not used for anything else|Never shown in our portfolio without your separate written permission|Deleted, together with the trained likeness models, within 7 days of you confirming delivery, or sooner if you ask|You can ask at any time what we hold and ask us to delete it: harborinkstudio@gmail.com",
    privacy_notice: "Personal information collected: your name, email address and the photos you send. Purpose: making your order. Kept until 7 days after you confirm delivery.",
    fam_cta: "Start a family order",
  },
  ko: {
    fam_link: "사진 안내와 동의 사항",
    fam_title: "우리 가족 웹툰",
    fam_lead: "가족 사진으로 우리 가족이 주인공인 10-12컷 웹툰을 그리고 한국어와 영어로 식자합니다. 보내 주실 사진, 동의 사항, 사진을 다루는 방법을 안내해 드립니다.",
    fam_sample_title: "샘플: 첫 자전거",
    fam_sample_lead: "깔끔한 웹툰 그림체로 그린 10컷 샘플입니다. 샘플 속 가족은 가상의 인물이며, 의뢰인 가족은 서면 동의 없이 절대 공개하지 않습니다. 위에서 언어를 바꾸면 영어로 볼 수 있습니다.",
    fam_price_title: "가격과 기간",
    fam_price: "1-2명 150,000원, 한 명 추가될 때마다 50,000원. 캐릭터 시트를 확인해 주신 뒤 3-5일 안에 완성됩니다.",
    photos_title: "이런 사진이 좋아요",
    photos_points: "한 사람당 15-30장, 최근 1-2년 안에 찍은 사진|얼굴이 선명하고 초점이 맞은 사진, 낮이나 밝은 실내|여러 각도: 정면과 측면, 웃는 사진과 웃지 않는 사진|대부분은 한 사람씩 나온 사진, 단체 사진도 몇 장 있으면 좋아요|선글라스, 마스크, 강한 필터나 보정 앱은 피해 주세요|메신저로 다시 받은 사진이나 캡처 말고 원본 파일 (메신저는 사진을 압축합니다)",
    send_title: "보내는 방법",
    send_body: "구글 드라이브나 네이버 MYBOX 같은 공유 폴더에 한 사람당 하위 폴더를 만들어 사진을 넣고, 주문서에 링크를 보내 주세요. 아이 사진을 공개 게시물로 올려서 보내지는 말아 주세요.",
    consent_title: "동의 사항",
    consent_points: "사진 속 성인 모두의 동의를 받았고, 사진 속 아이의 부모 또는 법정대리인이거나 그 보호자의 동의를 받았습니다|사진은 본인 가족이나 동의한 분들의 사진이며, 유명인이나 동의하지 않은 사람은 포함하지 않습니다|웹툰을 다른 사람을 곤란하게 하거나 속이거나 해치는 데 쓰지 않습니다. 실존 인물의 성적이거나 폭력적인 내용은 그리지 않습니다|위 사항에 맞지 않는 주문은 거절할 수 있습니다",
    privacy_title: "사진을 다루는 방법",
    privacy_points: "주문 작업에만 사용합니다: 한 사람마다 비공개 얼굴 학습 모델을 만들고 웹툰을 그리는 데 씁니다|저희 장비에만 보관하며, 외부 AI 서비스에 올리지 않고, 공유하거나 다른 용도로 쓰지 않습니다|따로 서면 동의를 받지 않는 한 포트폴리오에 절대 싣지 않습니다|납품 확인 후 7일 안에, 또는 요청하시면 더 빨리, 학습 모델과 함께 삭제합니다|보관 중인 자료가 무엇인지 언제든 물어보시고 삭제를 요청하실 수 있습니다: harborinkstudio@gmail.com",
    privacy_notice: "수집하는 개인정보: 이름, 이메일 주소, 보내 주신 사진. 이용 목적: 주문 작업. 보유 기간: 납품 확인 후 7일까지.",
    fam_cta: "가족 웹툰 주문하기",
  },
};

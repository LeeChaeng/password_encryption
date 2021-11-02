# Password Encryption

Google Developer Student Club(GDSC) EWHA Devfest에서의 연사 세션을 위한 repository 입니다.

## 사용한 기술

- [bctypt](https://www.npmjs.com/package/bcrypt)
- node.js
- ejs
- express

## 프로젝트 시작하기

### clone 프로젝트

```bash
$ git clone https://github.com/LeeChaeng/password_encryption.git
```

### 모듈 설치

```bash
$ npm install
```

### 프로젝트 실행

```
$ npm run start
```

- 프로젝트 실행후 localhost:3000 에서 프로젝트를 확인할 수 있습니다.

## 데이터베이스 확인하기

- 회원가입 후 `~/data/db.json` 파일을 확인해보면 암호화된 digest를 확인할 수 있습니다.
- [lowdb](https://www.npmjs.com/package/lowdb/v/1.0.0)를 통해 로컬 파일로 저장되기 때문에 안심하셔도 좋습니다 ^\_\_^

---

문의 및 질문: htijl@naver.com

# Node.js 14를 기반으로 이미지 생성
FROM node:14

# 작업 디렉토리 생성
WORKDIR /usr/src/app

# 애플리케이션 코드 복사
COPY app.js /usr/src/app/app.js

# 필요한 패키지 설치
RUN npm install ws

# 애플리케이션 실행 명령
CMD ["node", "app.js"]

import os
from NaverNewsCrawler import NaverNewsCrawler
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import smtplib
import re
# 사용자로 부터 기사 수집을 원하는 키워드를 input을 이용해 입력받아 ? 부분에 넣으세요
crawler = NaverNewsCrawler("설탕")  # TODO 추후 대체 예정

# 수집한 데이터를 저장할 엑셀 파일명을 input을 이용해 입력받아 ? 부분에 넣으세요

crawler.get_news("news_result.xlsx")

# 아래코드를 실행해 이메일 발송 기능에 필요한 모듈을 임포트하세요.


# gmail 발송 기능에 필요한 계정 정보를 아래 코드에 입력하세요.
SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 465
SMTP_USER = 'samakcottontail@gmail.com'
SMTP_PASSWORD = 'thaxjf92'

# 아래 코드를 실행해 메일 발송에 필요한 send_mail 함수를 만드세요.


def send_mail(name, addr, subject, contents, attachment=None):
    if not re.match('(^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)', addr):
        print('Wrong email')
        return


msg = MIMEMultipart('alternative')
if attachment:
    msg = MIMEMultipart('mixed')

msg['From'] = SMTP_USER
msg['To'] = addr
msg['Subject'] = name + '님, ' + subject

text = MIMEText(contents, _charset='utf-8')
msg.attach(text)

if attachment:
    from email.mime.base import MIMEBase
    from email import encoders

file_data = MIMEBase('application', 'octect-stream')
file_data.set_payload(open(attachment, 'rb').read())
encoders.encode_base64(file_data)

filename = os.path.basename(attachment)
file_data.add_header('Content-Disposition',
                     'attachment; filename="' + filename + '"')
msg.attach(file_data)

smtp = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
smtp.login(SMTP_USER, SMTP_PASSWORD)
smtp.sendmail(SMTP_USER, addr, msg.as_string())
smtp.close()

# 프로젝트 폴더에 있는 email_list.xlsx 파일에 이메일 받을 사람들의 정보를 입력하세요.

# 엑셀 파일의 정보를 읽어올 수 있는 모듈을 import하세요.

# email_list.xlsx 파일을 읽어와 해당 사람들에게 수집한 뉴스 정보 엑셀 파일을 send_mail 함수를 이용해 전송하세요.
send_mail()

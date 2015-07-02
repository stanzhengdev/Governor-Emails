from app import db
from flask import current_app
from datetime import datetime


class Email (db.Model):
    __tablename__ = "kaine_email"
    # id = db.Column(db.Integer, index=True, primary_key=True)
    file = db.Column(db.String(100), index=True, primary_key=True)
    date = db.Column(db.DateTime, index=False, default=datetime.utcnow)
    subject = db.Column(db.String(100), index=True)
    senderName = db.Column(db.String(100), index=True)
    recipientName = db.Column(db.String(100), index=True)
    ccName = db.Column(db.String(100), index=True)
    body = db.Column(db.String(10000), index=False)
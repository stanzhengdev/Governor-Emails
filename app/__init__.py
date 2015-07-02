from flask import Flask
from flask_admin import Admin
from flask.ext.sqlalchemy import SQLAlchemy
from flask_admin.contrib.sqla import ModelView
import os

app = Flask(__name__)
app.config.from_object('config.BaseConfig')
print app.config['SQLALCHEMY_DATABASE_URI']
db = SQLAlchemy(app)

from app import views

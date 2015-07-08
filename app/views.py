from app import models, db
# from flask import Blueprint, jsonify, Response, request

# # url redirect
# @app.route('/', methods=['GET'])
# def index():
#     # setup to save on each visit, if none then save
#     return "hello"


# @app.route('/')
# def index():
#     urls = db.session.query(models.Email).all()
#     return jsonify(result=[c.to_json() for c in urls])
db.create_all()
print(db.metadata)
print (db.session.query(models.Email).all())

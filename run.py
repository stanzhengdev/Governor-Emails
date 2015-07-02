#!bin/python
"""
Basic Run  init script if not behind Gunicorn
"""
from app import app


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5678)
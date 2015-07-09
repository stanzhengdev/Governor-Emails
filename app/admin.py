from flask_admin.contrib.sqla import ModelView


class UrlView(ModelView):
    name = "UrlView"

    def __init__(self, model, session, **kwargs):
        # You can pass name and other parameters if you want to
        super(UrlView, self, **kwargs).__init__(model, session, **kwargs)

from flask import Blueprint, render_template
views = Blueprint('views', __name__)
from main import safetyCount, gameSafety1, gameSafety2, gameSafety3



if safetyCount == 1:
    @views.route('/')
    def home1():
        return render_template("Safety1.html", answer = gameSafety1)
elif safetyCount == 2:
    @views.route('/')
    def home2():
        return render_template("Safety2.html", answer = gameSafety1, answer2 = gameSafety2)
elif safetyCount == 3:
    @views.route('/')
    def home3():
        return render_template("Safety3.html", answer = gameSafety1, answer2 = gameSafety2, answer3 = gameSafety3)
else:
    @views.route('/')
    def home():
        return render_template("AnySafeties.html")

@views.route('/about')
def about():
    return render_template("about.html")

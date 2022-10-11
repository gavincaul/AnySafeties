from selenium import webdriver
from selenium.webdriver.common.by import By
from datetime import date
from website import create_app

#PATH for chromedriver
PATH = "/Users/gavincaulfield/Downloads/chromedriver"

#list of NFL Teams
NFLTeams = ["Cardinals", "Falcons", "Ravens", "Bills", "Panthers", "Bears", "Bengals", "Browns", "Cowboys", "Broncos", "Lions", "Packers", "Texans", "Colts", "Jaguars",
"Chiefs", "Raiders", "Chargers", "Rams", "Dolphins", "Vikings", "Patriots", "Saints", "Giants", "Jets", "Eagles", "Steelers", "49ers", "Seahawks", "Buccaneers",
 "Titans", "Commanders"]



#Assign games to variables through detection of boxscore -- 16 possible games for a week of NFL
game1 = None
game2 = None
game3 = None
game4 = None
game5 = None
game6 = None
game7 = None
game8 = None
game9 = None
game10 = None
game11 = None
game12 = None
game13 = None
game14 = None
game15 = None
game16 = None

#3 possible games for a safety to happen in (should hypothetically be 16 but there will never be more than 3 in a week most likely)
gameSafety1 = ""
gameSafety2 = ""
gameSafety3 = ""


#find the week of the NFL that it is
distance = date.today() - date(year=2022,month=9,day=6)
weeks = 0
while(distance.days > 7*weeks):
    weeks+=1

weeklyLink = "https://www.espn.com/nfl/scoreboard/_/week/" + str(weeks) + "/year/2022/seasontype/2"

#Assigns each game of the week with the play by play url
driverWeek = webdriver.Chrome(PATH)
driverWeek.get(weeklyLink)
search = driverWeek.find_elements(by=By.TAG_NAME, value="a")
gameNum = 0
for x in search:
    if "PLAY-BY-PLAY" in x.text:
        gamelink = x.get_attribute("href")
        gameNum+=1
        if gameNum == 1:
            game1 = gamelink
        if gameNum == 2:
            game2 = gamelink
        if gameNum == 3:
            game3 = gamelink
        if gameNum == 4:
            game4 = gamelink
        if gameNum == 5:
            game5 = gamelink
        if gameNum == 6:
            game6 = gamelink
        if gameNum == 7:
            game7 = gamelink
        if gameNum == 8:
            game8 = gamelink
        if gameNum == 9:
            game9 = gamelink
        if gameNum == 10:
            game10 = gamelink
        if gameNum == 11:
            game11 = gamelink
        if gameNum == 12:
            game12 = gamelink
        if gameNum == 13:
            game13 = gamelink
        if gameNum == 14:
            game14 = gamelink
        if gameNum == 15:
            game15 = gamelink
        if gameNum == 16:
            game16 = gamelink
driverWeek.close()


global safetyCount
safetyCount = 0

def AssignSafety(specificGameLink, safeties):
    #Assigns safeties to a specific game number (first, second, third, etc.) I didn't go over 3 because let's be honest when
    #would there be more than 3 safeties in a week
    if(safeties == 1):
        check = specificGameLink.find_elements(by=By.TAG_NAME, value="span")
        team1 = ""
        team2 = ""
        whichTeam = True
        for x in check:
            if x.text in NFLTeams and whichTeam:
                team1 = str(x.text)
                whichTeam = False
            elif x.text in NFLTeams:
                team2 = str(x.text)
        global gameSafety1
        gameSafety1 = "The first safety of the week was in the " + team1 + " vs " + team2 + " game."
    elif (safeties == 2):
        check = specificGameLink.find_elements(by=By.TAG_NAME, value="span")
        team1 = ""
        team2 = ""
        whichTeam = True
        for x in check:
            if x.text in NFLTeams and whichTeam:
                team1 = str(x.text)
                whichTeam = False
            elif x.text in NFLTeams:
                team2 = str(x.text)
        global gameSafety2
        gameSafety2 = "The second safety of the week was in the " + team1 + " vs " + team2 + " game."
    elif (safeties == 3):
        check = specificGameLink.find_elements(by=By.TAG_NAME, value="span")
        team1 = ""
        team2 = ""
        whichTeam = True
        for x in check:
            if x.text in NFLTeams and whichTeam:
                team1 = str(x.text)
                whichTeam = False
            elif x.text in NFLTeams:
                team2 = str(x.text)
        global gameSafety3
        gameSafety3 = "The third safety of the week was in the " + team1 + " vs " + team2 + " game."




def SafetyCheck(specificGame):
    gameLink = webdriver.Chrome(PATH)
    gameLink.get(specificGame)
    check = gameLink.find_elements(by=By.CLASS_NAME, value="headline")
    for x in check:
        if "SAFETY" in x.text:
            global safetyCount
            safetyCount += 1
            AssignSafety(gameLink, safetyCount)
    gameLink.close()

if(game1 != None):
    SafetyCheck(game1)


if(game2 != None):
    SafetyCheck(game2)


if(game3 != None):
    SafetyCheck(game3)


if(game4 != None):
    SafetyCheck(game4)


if(game5 != None):
    SafetyCheck(game5)


if(game6 != None):
    SafetyCheck(game6)


if(game7 != None):
    SafetyCheck(game7)

if(game8 != None):
    SafetyCheck(game8)

if(game9 != None):
    SafetyCheck(game9)


if(game10 != None):
    SafetyCheck(game10)


if(game11 != None):
    SafetyCheck(game11)


if(game12 != None):
    SafetyCheck(game12)


if(game13 != None):
    SafetyCheck(game13)


if(game14 != None):
    SafetyCheck(game14)


if(game15 != None):
    SafetyCheck(game15)


if(game16 != None):
    SafetyCheck(game16)

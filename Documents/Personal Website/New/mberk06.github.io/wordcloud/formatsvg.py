#This file will be used to format the svg using text replacements

#########################
#imports
import re
import csv
import random

#Constants
col = "#DCDCDD"
className = "wordcloud-word"

#Read in svg as string
svg = open("wordcloud-original.svg","r") 
s = svg.read()
svg.close()

#read in words to replace
wordLinks = list(csv.reader(open("word-links.csv")))

#########################
#replacement function
def replaceText(startString, endChar, replacement, s):
	#get indeces to replace
	allFills = [m.start() for m in re.finditer(startString, s)]
	endOfFills = [s.index(endChar, i) for i in allFills]

	#check if replacement has multiple values
	isString = isinstance(replacement, str)

	#replace vals
	for i in reversed(range(0, len(allFills))):
		if isString:
			s = s[:allFills[i] + len(startString)] + replacement + s[endOfFills[i]:]
		else:
			s = s[:allFills[i] + len(startString)] + random.choice(replacement) + s[endOfFills[i]:]
	return s

#########################
#Call functions
out = replaceText("fill:", ";", col, s) #Change color
out = replaceText('"middle"', 't', ' class="'+className+'" onmouseover="darkWord(this)" onmouseleave="lightWord(this)" ', out) #Add class name

#add links
for word,url in wordLinks:
	#index to add
	if word in out:
		temp = out.split(">"+word)
		out = temp[0] + ' onclick="window.location=\''+url+'\'">' + word + temp[1]

#write to svg
svg = open("wordcloud.svg","w") 
svg.write(out)
svg.close()

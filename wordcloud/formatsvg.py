#This file will be used to format the svg using text replacements

#########################
#imports
import re
import random

#Constants
col = "grey"
className = "wordcloud-word"

#Read in file as string
svg = open("wordcloud-original.svg","r") 
s = svg.read()
svg.close()

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

#write to svg
svg = open("wordcloud.svg","w") 
svg.write(out)
svg.close()

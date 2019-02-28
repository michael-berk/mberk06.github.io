#This file will be used to repeat words according to words.csv
#Cloud Generator: https://www.jasondavies.com/wordcloud/

#Read in file
import csv
inputs = open('wordsIn.csv', 'r')
reader = csv.reader(inputs, delimiter=',')
data = []
for row in reader:
    data.append(row)
inputs.close()

#write to file
outputs = open("wordsOut.txt", "w")
for row in data:
	outputs.write((row[0] + "\n")*int(row[1]))
	#outputs.write((row[0] + "\n")*int(int(row[1])/10))
outputs.close()

#Next Steps:
#1. Download svg into directory (as wordcloud.svg)
#2. Add id="wordcloud-svg" to svg file
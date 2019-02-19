i3_CONFIG=dotfiles/.config/i3/config
i3_STATUS=dotfiles/.config/i3status/config

.PHONY: all
all: ${i3_CONFIG} ${i3_STATUS}


${i3_CONFIG}: ${i3_CONFIG}.base ${i3_CONFIG}.local
	touch ${i3_CONFIG}.local
	cat ${i3_CONFIG}.base ${i3_CONFIG}.local > ${i3_CONFIG}

${i3_STATUS}: ${i3_STATUS}.base ${i3_STATUS}.local
	touch ${i3_STATUS}.local
	cat ${i3_STATUS}.base ${i3_CONFIG}.local > ${i3_STATUS}

.PHONY: clean
clean:
	rm ${i3_CONFIG}
	rm ${i3_STATUS}

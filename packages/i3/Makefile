CONFIG_DIR=dotfiles/.config
CONFIGS:=${CONFIG_DIR}/i3/config \
	 ${CONFIG_DIR}/i3status/config

.PHONY: all
all: ${CONFIGS}


${CONFIGS}: % : %.base %.local
	cat $^ > $@

%.local:
	touch $@

.PHONY: clean
clean:
	rm ${CONFIGS}

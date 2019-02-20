CONFIG_DIR=dotfiles/.config
CONFIGS:=${CONFIG_DIR}/i3blocks/config

.PHONY: all
all: ${CONFIGS}


${CONFIGS}: % : %.base %.local
	cat $^ > $@

%.local:
	touch $@

.PHONY: clean
clean:
	rm -f ${CONFIGS}

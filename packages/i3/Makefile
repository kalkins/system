CONFIG_DIR=dotfiles/.config
CONFIGS:=${CONFIG_DIR}/i3/config \
	 ${CONFIG_DIR}/i3status/config

.PHONY: all
all: ${CONFIGS}


${CONFIGS}: % : %.base %.local
	cat $^ > $@

# If a local config doesn't exist,
# copy config.local.example
%.local:
	cp -n $@.example $@

.PHONY: clean
clean:
	rm -f ${CONFIGS}

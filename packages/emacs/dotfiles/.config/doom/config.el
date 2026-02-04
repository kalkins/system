;;; $DOOMDIR/config.el -*- lexical-binding: t; -*-

;; Place your private configuration here! Remember, you do not need to run 'doom
;; sync' after modifying this file!


;; Some functionality uses this to identify you, e.g. GPG configuration, email
;; clients, file templates and snippets. It is optional.
;; (setq user-full-name "John Doe"
;;       user-mail-address "john@doe.com")

;; Doom exposes five (optional) variables for controlling fonts in Doom:
;;
;; - `doom-font' -- the primary font to use
;; - `doom-variable-pitch-font' -- a non-monospace font (where applicable)
;; - `doom-big-font' -- used for `doom-big-font-mode'; use this for
;;   presentations or streaming.
;; - `doom-symbol-font' -- for symbols
;; - `doom-serif-font' -- for the `fixed-pitch-serif' face
;;
;; See 'C-h v doom-font' for documentation and more examples of what they
;; accept. For example:
;;
;;(setq doom-font (font-spec :family "Fira Code" :size 12 :weight 'semi-light)
;;      doom-variable-pitch-font (font-spec :family "Fira Sans" :size 13))
;;
;; If you or Emacs can't find your font, use 'M-x describe-font' to look them
;; up, `M-x eval-region' to execute elisp code, and 'M-x doom/reload-font' to
;; refresh your font settings. If Emacs still can't find your font, it likely
;; wasn't installed correctly. Font issues are rarely Doom issues!

;; There are two ways to load a theme. Both assume the theme is installed and
;; available. You can either set `doom-theme' or manually load a theme with the
;; `load-theme' function. This is the default:
(setq doom-theme 'doom-one)

;; This determines the style of line numbers in effect. If set to `nil', line
;; numbers are disabled. For relative line numbers, set this to `relative'.
(setq display-line-numbers-type t)

;; If you use `org' and don't want your org files in the default location below,
;; change `org-directory'. It must be set before org loads!
(setq org-directory "~/org/")


;; Whenever you reconfigure a package, make sure to wrap your config in an
;; `after!' block, otherwise Doom's defaults may override your settings. E.g.
;;
;;   (after! PACKAGE
;;     (setq x y))
;;
;; The exceptions to this rule:
;;
;;   - Setting file/directory variables (like `org-directory')
;;   - Setting variables which explicitly tell you to set them before their
;;     package is loaded (see 'C-h v VARIABLE' to look up their documentation).
;;   - Setting doom variables (which start with 'doom-' or '+').
;;
;; Here are some additional functions/macros that will help you configure Doom.
;;
;; - `load!' for loading external *.el files relative to this one
;; - `use-package!' for configuring packages
;; - `after!' for running code after a package has loaded
;; - `add-load-path!' for adding directories to the `load-path', relative to
;;   this file. Emacs searches the `load-path' when you load packages with
;;   `require' or `use-package'.
;; - `map!' for binding new keys
;;
;; To get information about any of these functions/macros, move the cursor over
;; the highlighted symbol at press 'K' (non-evil users must press 'C-c c k').
;; This will open documentation for it, including demos of how they are used.
;; Alternatively, use `C-h o' to look up a symbol (functions, variables, faces,
;; etc).
;;
;; You can also try 'gd' (or 'C-c c d') to jump to their definition and see how
;; they are implemented.

;; Custom config

;; Key mapping

;;; Shift HJKL to JKLØ
(map! :m "j" #'evil-backward-char
      :m "k" #'evil-next-visual-line
      :m "l" #'evil-previous-visual-line
      :m "ø" #'evil-forward-char)

(map! :map evil-window-map
      "j" #'evil-window-left
      "k" #'evil-window-down
      "l" #'evil-window-up
      "ø" #'evil-window-right)

(map! :n "C-j" #'evil-window-left
      :n "C-k" #'evil-window-down
      :n "C-l" #'evil-window-up
      :n "C-ø" #'evil-window-right)

(after! evil-collection
  ;; Define a function that swaps the keys in a given keymap
  (defun nordic-shift (_mode mode-keymaps &rest _ignored)
    ;; Translate keys in Normal, Visual, and Motion states
    (evil-collection-translate-key '(normal motion visual) mode-keymaps
      "j" "h"  ; Your j acts like the original h (Left)
      "k" "j"  ; Your k acts like the original j (Down)
      "l" "k"  ; Your l acts like the original k (Up)
      "ø" "l"  ; Your ø acts like the original l (Right)
      )

    (evil-collection-translate-key '(normal motion visual emacs) mode-keymaps
      (kbd "C-j") (kbd "C-h")
      (kbd "C-k") (kbd "C-j")
      (kbd "C-l") (kbd "C-k")
      (kbd "C-ø") (kbd "C-l")
      (kbd "C-h") (kbd "C-ø")
      ))

  ;; Add this function to the hook so it runs for every package evil-collection handles
  (add-hook 'evil-collection-setup-hook #'nordic-shift))

(after! vertico
  (map! :map vertico-map
        "C-j" #'vertico-directory-up    ; Left  (Go up a folder)
        "C-k" #'vertico-next            ; Down  (Next candidate)
        "C-l" #'vertico-previous        ; Up    (Previous candidate)
        "C-ø" #'vertico-insert))        ; Right (Enter folder)

;;; h is not used anymore, so it can be used to loop through line numberings
(defun my-cycle-line-numbers ()
  "Cycle through relative, absolute, and no line numbers."
  (interactive)
  (let ((state display-line-numbers))
    (cond
     ((eq state 'relative)
      (setq display-line-numbers t)
      (message "Line numbers: Absolute"))
     ((eq state t)
      (setq display-line-numbers nil)
      (message "Line numbers: None"))
     (t
      (setq display-line-numbers 'relative)
      (message "Line numbers: Relative")))))

(map! :n "h" #'my-cycle-line-numbers)

;;; Smartparens
(after! smartparens
  (map! :map smartparens-mode-map
        "M-j" #'sp-forward-barf-sexp
        "M-ø" #'sp-forward-slurp-sexp
        "M-k" #'sp-backward-slurp-sexp
        "M-l" #'sp-backward-barf-sexp))

;; Language config

;;; Format on save
(setq +format-on-save-enabled-modes
      '(python-mode
        rust-mode
        js2-mode
        typescript-mode
        web-mode
        json-mode
        yaml-mode
        dockerfile-mode
        sql-mode))

;;; Python
(after! python
  (set-formatter! 'ruff :modes '(python-mode python-ts-mode)))


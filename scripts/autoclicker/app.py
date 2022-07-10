from guizero import App, Text, PushButton
from pynput.mouse import Controller, Button
from pynput.keyboard import GlobalHotKeys

app = App(title="Hello world!")
message = Text(app, text="Welcome to the Hello world app!")

mouse = Controller()
is_clicking = False

def do_click():
    if is_clicking:
        mouse.click(Button.left, 2)

def toggle_clicking():
    global is_clicking
    is_clicking = not is_clicking
    button.text = 'Stop' if is_clicking else 'Start'
    mouse.move(0, 30)

button = PushButton(app, text="Start", command=toggle_clicking)

GlobalHotKeys({
    '<ctrl>+<alt>+[': toggle_clicking
}).start()

app.repeat(10, do_click)

app.display()

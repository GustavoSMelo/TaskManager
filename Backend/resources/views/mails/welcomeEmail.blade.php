<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
        <link rel="stylesheet" type="text/css" href="../../css/email.style.css" />
    </head>
    <body>
        <h1>Hello Sr.(a) {{$username}}</h1>
        <p>
            You are welcome to use our app, but to use our app, first you need to verify your email.<br />
            This is very simple, the only thing that you need to do is click the button below

            <button type="button">
                <a href="http://localhost:8000/api/verify/email/{{$email}}" target="blank">Verify Email</a>
            </button>

            <br />
            PS: if you find a bug, please report to us
        </p>
    </body>
</html>

from pathlib import Path



def html_writer(name):

    f = open(f"books/txt_files/{name}.txt", encoding="utf-8")

    name_spaces = f.readline()
    name_dashes = name.replace(" ", "-").lower()
    name_dashes = name_dashes.replace("_", "-")

    html = open(f"books/{name_dashes}.html", "w")

    html.write(f"""
    <!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width">
    <meta name="author" content="Daniel Duncanson" />
    <meta name="description" content="I'm Daniel. This is my website." />
    
    <link rel="icon" href="https://danielduncanson12.github.io/test_logo.png" />
    <link rel="apple-touch-icon" href="https://danielduncanson12.github.io/test_logo.png" />

    <meta property="og:image" content="https://danielduncanson12.github.io/test_logo.png">
    <meta property="og:description" content="Not a whole lot going on here. Welcome.">
    <meta property="og:title" content="Daniel Duncanson's personal website">

    <script defer src="quotes/quote_script.js"></script>

    <link href="../style.css" rel="stylesheet" />

    <link href="../books_style.css" rel="stylesheet" /> 

    <link rel="icon" href="https://danielduncanson12.github.io/test_logo.png" />

    <title> {name_spaces} </title>
  </head>


<body class="page_style">

  <header>
    <nav class="nav_style">
      <a href="index.html">Main</a> 
      <a href="me.html">Me</a> 
      <a href="projects.html">Projects</a>
      <a href="tests.html">Tests</a>
    </nav>
  </header>

  <a href="../books.html"> Back to the other books </a>

    """)

    html.write(f"<h3> {name_spaces} </h3>")
    html.write(f" <h4> {f.readline()} </h4>")
    f.readline()
    html.write("<p>")

    for line in f:
        if line.strip() == "":
            html.write("</p> <p>")
        else:
            html.write(line)

    html.write("</p>")

    html.write("""
  </body>
</html>
        """)


    html.close()
    f.close()



folder = Path("books/txt_files")

for file in folder.iterdir():
    title = file.name[:-4]
    html_writer(title)
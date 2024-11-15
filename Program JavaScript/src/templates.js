export function generateEmptyTemplate() {
  return `
    <!DOCTYPE html>
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Szablon artykułu</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <nav id="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div class="container">
            <!-- Tutaj wklej treść artykułu -->
            <footer>
                &copy; 2024 Piotr Gordziejczyk ZADANIE-REKRUTACYJNE
            </footer>
        </div>
        <script src="script.js"></script>
    </body>
    </html>
  `;
}

export function generateCSS() {
  return `
    body {
        background-image: url('https://picsum.photos/1920/1080');
        background-size: cover;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        color: #fff;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    nav {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        transition: left 0.3s ease-in-out;
    }

    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
    }

    nav ul li {
        padding: 14px 20px;
    }

    nav ul li a {
        text-decoration: none;
        color: #fff;
    }

    nav ul li a:hover {
        text-decoration: underline;
    }

    nav.hidden {
        left: -100%;
    }

    .container {
        background-color: rgba(0, 0, 0, 0.7);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        width: 80%;
        max-width: 800px;
        margin-top: 100px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    footer {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px;
        text-align: center;
        color: #fff;
        font-size: 0.8em;
    }

    @media (prefers-color-scheme: dark) {
        body {
            background-color: #121212;
            color: #ffffff;
        }
        nav {
            background-color: rgba(30, 30, 30, 0.8);
        }
    }
  `;
}

export function generateJS() {
  return `
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        var navbar = document.getElementById('navbar');
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });
  `;
}
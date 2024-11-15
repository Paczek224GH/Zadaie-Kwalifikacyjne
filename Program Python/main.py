import openai

# Klucz API OpenAI
openai.api_key = 'sk-proj-...your_API_key...'

# Funkcja do odczytu pliku tekstowego
def read_text_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

# Funkcja do zapisywania plików
def save_file(content, file_path):
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

# Funkcja przetwarzająca artykuł z OpenAI w jezyku angielskim zeby AI lepiej zrozumiało
def process_article_with_openai(article_text):
    prompt = f"""
   Convert the following article text into HTML using only semantic HTML5 tags. The generated HTML must meet these requirements:

        - Encode the text in utf-8.
        - Use only semantic HTML5 tags such as <article>, <section>, <h1>-<h6>, <p>.
        - Do not include: <html>, <head>, <body>, DOCTYPE, CSS, or JavaScript.
        - Ensure that article <footer> is placed within <div class="container">, which wraps around the entire article content.
        - Add image placeholders with <img> tags that have src="image_placeholder.jpg" and descriptive alt attributes.
        - Add captions under each image using the <figcaption> tag.

    Please return HTML that includes only the article's structure and content, following these guidelines.

Article to process:
{article_text}
    """
    
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ]
        )
        html_content = response['choices'][0]['message']['content'].strip()
        return html_content
    except Exception as e:
        print(f"Błąd podczas przetwarzania artykułu: {e}")
        return None

def generate_empty_template():
    return """
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
    """

def generate_css():
    return """
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
    """

def generate_js():
    return """
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        var navbar = document.getElementById('navbar');
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll down
            navbar.classList.add('hidden');
        } else {
            // Scroll up
            navbar.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });
    """

# Ścieżki do plików
input_file_path = 'plik_tekstowy.txt'
article_file_path = 'artykul.html'
template_file_path = 'szablon.html'
preview_file_path = 'podglad.html'
css_file_path = 'styles.css'
js_file_path = 'script.js'

# Główna funkcja
def main():
    try:
        article_text = read_text_file(input_file_path)
        print("Artykuł załadowany.")

        processed_article = process_article_with_openai(article_text)
        if processed_article is None:
            print("Nie udało się przetworzyć artykułu.")
            return

        print("HTML artykułu wygenerowany.")
        save_file(processed_article, article_file_path)
        print('Artykuł został przetworzony i zapisany jako artykul.html')

        empty_template = generate_empty_template()
        save_file(empty_template, template_file_path)
        print('Szablon HTML został zapisany jako szablon.html')

        css_content = generate_css()
        save_file(css_content, css_file_path)
        print('Plik CSS został zapisany jako styles.css')

        js_content = generate_js()
        save_file(js_content, js_file_path)
        print('Plik JavaScript został zapisany jako script.js')

        full_preview = empty_template.replace('<!-- Tutaj wklej treść artykułu -->', processed_article)
        save_file(full_preview, preview_file_path)
        print('Podgląd artykułu został zapisany jako podglad.html')

    except Exception as e:
        print(f"Wystąpił błąd: {e}")

if __name__ == '__main__':
    main()

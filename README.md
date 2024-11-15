# Zadaie-Kwalifikacyjne
Zadaie Kwalifikacyjne
# Procesor Artykułów z Nawigacją

Projekt przetwarza plik tekstowy zawierający artykuł i konwertuje go na strukturę HTML za pomocą API OpenAI. Wygenerowany HTML jest następnie łączony z dostarczonym szablonem i CSS, tworząc podgląd stylizowany artykułu z animowaną nawigacją.

## Wymagania

Przed uruchomieniem projektu, należy zainstalować:

- Python 3.x
- Bibliotekę OpenAI dla Pythona (`openai`)

Należy również ustawić swój klucz API OpenAI.
-------------------------------------------------------------------------------------------------
## Instalacja

1. **Sklonuj repozytorium:**

   ```bash
   git clone <adres_repozytorium>
   cd <katalog_repozytorium>
Zainstaluj wymagane biblioteki Pythona:

bash
pip install openai
Ustaw klucz API OpenAI:

Zamień placeholder 'sk-proj-...your_API_key...' swoim rzeczywistym kluczem API OpenAI w skrypcie.
-------------------------------------------------------------------------------------------------
Pliki
main.py: Główny skrypt zawierający wszystkie funkcje i logikę.

plik_tekstowy.txt: Wejściowy plik tekstowy zawierający artykuł.

artykul.html: Wygenerowany plik HTML zawierający strukturę artykułu.

szablon.html: Plik szablonu HTML.

podglad.html: Połączony plik podglądu HTML.

styles.css: Plik CSS do stylizacji podglądu.

script.js: Plik JavaScript do animacji nawigacji.
-------------------------------------------------------------------------------------------------
Jak uruchomić
Przygotuj plik wejściowy:

Upewnij się, że plik_tekstowy.txt zawiera artykuł, który chcesz przetworzyć.

Uruchom główny skrypt:

bash
python main.py
Pliki wyjściowe:

Po uruchomieniu skryptu, otrzymasz następujące pliki wyjściowe:

artykul.html: Zawiera strukturę HTML artykułu.

szablon.html: Zawiera szablon HTML.

podglad.html: Zawiera połączony podgląd HTML.

styles.css: Zawiera style CSS dla podglądu.

script.js: Zawiera skrypt JavaScript do animacji nawigacji.
-------------------------------------------------------------------------------------------------
Dostosowanie
Tekst artykułu:

Zaktualizuj zawartość plik_tekstowy.txt swoim własnym tekstem artykułu.

Szablon HTML:

Zmodyfikuj funkcję generate_empty_template() w main.py aby dostosować szablon HTML.

Style CSS:

Zmodyfikuj funkcję generate_css() w main.py aby dostosować style CSS.

Skrypt JavaScript:

Zmodyfikuj funkcję generate_js() w main.py aby dostosować animację nawigacji.
-------------------------------------------------------------------------------------------------
Licencja
Projekt jest licencjonowany na warunkach licencji MIT. Zobacz plik LICENSE po szczegóły.

Podziękowania
Projekt korzysta z modelu GPT-3.5-turbo OpenAI do przetwarzania artykułów.

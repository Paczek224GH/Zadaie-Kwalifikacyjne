# Projekt: Procesor Artykułów

Ten projekt przetwarza tekst artykułu, konwertuje go na sformatowany HTML, generuje podgląd artykułu oraz tworzy odpowiednie pliki CSS i JavaScript. Do przetwarzania artykułu używana jest sztuczna inteligencja OpenAI, która przekształca tekst artykułu na semantyczny HTML5.

## Funkcje

- **Przetwarzanie artykułu**: Odczytuje tekst artykułu z pliku tekstowego i używa OpenAI do przetworzenia artykułu na semantyczny HTML.
- **Generowanie szablonu**: Tworzy podstawowy szablon HTML dla artykułu.
- **Stylizacja CSS**: Generuje plik CSS do stylizacji strony artykułu, w tym tła, paska nawigacyjnego i responsywności.
- **JavaScript**: Generuje plik JavaScript obsługujący widoczność paska nawigacyjnego na podstawie przewijania strony.
- **Generowanie podglądu**: Łączy artykuł z szablonem, tworząc podgląd pełnego artykułu.
- **Zapis plików**: Zapisuje wszystkie wygenerowane pliki (artykuł, szablon, CSS, JS, podgląd) na dysku lokalnym.

## Konfiguracja

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/twoja-nazwa-uzytkownika/article-processor.git
Zainstaluj zależności:

npm install
Skonfiguruj swój klucz API OpenAI:

Otwórz plik config.js i zastąp wartość apiKey swoim kluczem API OpenAI.
Przygotuj plik z tekstem artykułu:

Stwórz plik tekstowy z treścią artykułu, np. plik_tekstowy.txt.
Struktura plików
├── README.md
├── config.js          # Zawiera ścieżki do plików i konfigurację API OpenAI
├── index.js           # Główny plik, uruchamiający przetwarzanie artykułu
├── src
│   ├── fileUtils.js   # Funkcje pomocnicze do odczytu i zapisu plików
│   ├── openaiService.js # Interakcje z OpenAI w celu przetworzenia artykułu
│   ├── templates.js   # Funkcje do generowania szablonu HTML, CSS i JS
├── plik_tekstowy.txt  # Plik wejściowy z tekstem artykułu
├── artykul.html       # Wygenerowany plik HTML artykułu
├── szablon.html       # Wygenerowany plik HTML szablonu
├── podglad.html       # Plik podglądu artykułu
├── styles.css         # Wygenerowany plik CSS
└── script.js          # Wygenerowany plik JavaScript
Jak używać
Umieść tekst artykułu w pliku plik_tekstowy.txt.
Uruchom plik index.js:
node index.js
Wygenerowane pliki artykułu, szablonu HTML, CSS, JS i podglądu będą zapisane w katalogu projektu.
Technologie
Node.js: Środowisko uruchomieniowe JavaScript do działania projektu.
API OpenAI: Wykorzystywane do przetwarzania tekstu artykułu i generowania kodu HTML.
fs/promises: Do operacji na plikach (odczyt i zapis plików).
HTML5: Generowanie szablonu HTML za pomocą semantycznych tagów HTML5.
CSS: Plik CSS odpowiadający za stylizację strony artykułu.
JavaScript: Skrypt obsługujący zachowanie paska nawigacyjnego.
Licencja
Projekt jest licencjonowany na podstawie licencji MIT – szczegóły w pliku LICENSE.
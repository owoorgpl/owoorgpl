# Strona Internetowa Stowarzyszenia OwO

Repozytorium posiadające kod źródłowy do strony Stowarzyszenia [owo.org.pl](https://owo.org.pl).

## Komendy
Wszystkie komendy są odpalane z głównego folderu projektu z terminala.

| Komenda                   | Akcja                                                    |
| :------------------------ | :--------------------------------------------------------|
| `npm install`             | Instaluje potrzebne biblioteki                           |
| `npm run dev`             | Odpala lokalny serwer na [localhost:4321](localhost:4321)|
| `npm run build`           | Buduje wersję produkcyjną strony do `./dist/`            |
| `npm run preview`         | Pogląd buildu strony przed deployem                      |
| `npm run astro ...`       | Odpala komendy jak `astro add`, `astro check`            |
| `npm run astro -- --help` | Wypisuje komendy w Astro CLI                             |

## Pisanie nowych funkcjonalności

Dla nowych osób pracujących z repozytorium mamy parę porad i zasad projektu, do których należy się stosować.

### Nazwy branchy

Branche oznaczamy czy to jest feature branch, czy branch zawierający fixy, czyli np. branch z nowym komponentem do picia herbaty nazywałby się `feature/tea-component`.

### Mergowanie i testowanie zmian

Jeżeli skończyłeś/aś pracować nad swoją nową funckjonalnością i nie wywala całego systemu, zmerguj ją na branch `dev`. Następnie poproś kogoś z infrastruktury (@HaserWolf lub @Bonn333) o deploy na środowisko deweloperskie.

Jak wszystko pójdzie zgodnie z planem, nowe zmiany powinny być widoczne na [wersji deweloperskiej strony](https://mld.owo.org.pl/). Nazwa użytkownika i hasło są podane na chacie sekcji.

### Korzystanie z projektu z taskami

By mieć możliwość trackowania co jest robione w sekcji, używaj tablicy WebOwO do zarządzania swoimi taskami. Pamiętaj by zaktualizować swoje taski by mieć aktualną wersję tego co robisz i przestawiać je w odpowiednie miejsca, adekwatne do obecnego stanu wykonania zadania.
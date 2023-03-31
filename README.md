# Simon Says 
---
## Descrizione 
Per cinque secondi stampare in pagina un N. di numeri casuali (differenti tra loro).

Alla fine del tempo, una volta rimossi i numeri, chiedere all' utente di inserire i numeri visualizzati.

Il software calcolerà `quanti` e `quali` numeri sono stati individuati restituendo un feedback all'utente.

---
## Procedimento

- Creare la funzione di un generatore di numeri random con range (si potrebbe implementare una feature `livello`)
- Intercettare un bottone START per far si che i 5 numeri vengano stampati a schermo, e inseriti in un array, e con una `timing` function ripristinare l'output HTML al termine del tempo stabilito.
- Creare un prompt per richiedere all' utente i numeri visualizzati precedentemente, e salvarli in un array.
- confrontare gli elementi dei 2 array e restituire un feedback in pagina. 
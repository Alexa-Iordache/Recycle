# Recycle

Pași realizare proiect

1. Am create un folder, in interiorul căruia am mai creat un folder separate: backend
2. M am mutat in folderul de backend 
3. Am rulat **npm init -y** -> pentru a crea proiectul in node.js (s-a adăugat un fișier de package.json )
4. Am instalat **express** -> a adăugat node modules si package-lock.json 
5. Am creat cele 3 fișiere (**api.js**, **indexj.js**, **mysql.js**) si folderul de **handlers** 
6. M am mutat in terminalul laptop ului si am instalat mysql (brew install mysql) - aici nu știu daca ție îți trebuie, dar eu așa fac pentru ca nu pot instala aplicația MySQL pe Mac
7. Am rulat comandat **mysql -u root -p** 
8. Am introdus parola (password)
9. Am creat baza de date, am creat tabelele, am populat tabelele, am verificat ca se afișează cum trebuie 
10. Am creat proiectul de angular: **ng new frontend** si am verificat ca rulează folosind comanda: **npm start **
11. Am rulat backend-ul sa verifica ca merge: m-am mutat in folder-ul backend si am rulat **npm start**
12. După ce am verificat ca toate rulează corect (baza de date, backend-ul, frontend-ul) le-am pus pe git
    !!! **important**: trebuie un terminal diferit pentru fiecare dintre cele 3 comenzi

13. Am creat o noua tabela in baza de date intitulata **Users**. Aceasta are ca si coloane: id (primary key), username (string), password (string), type (admin/ client)
14. Am creat pagina de **login**
15. Am creat pagina de **meniu principal** -> de unde te poti duce in pagina de abonamente/ tomberoane/ cereri colecare
16. Am creat pagina de tomberoane, unde e un tabel cu toate tomberoanele, se poate adauga unul nou sau se poate sterge si se poate edita un rand.
    !!! **important** toate acestea sunt facute pentru admin
17. Am creat pagina de clienti, unde se pot vedea datele clientilor impreuna cu tipul de abonament pe care il are fiecare. Exista butoante de adaugare/ stergere/ edit, dar momentan nu functioneaza
18. Am creat pagina de cerere colectare Exista butoante de adaugare/ stergere, dar momentan functioneaza doar butonul de stergere.
    
**OBS**: Am stars cheia straina din tblCereriColectare si am redefinit-o folosind on cascade 

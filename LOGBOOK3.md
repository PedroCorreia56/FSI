# Trabalho realizado na Semana #3

## Identificação

- Detetado na aplicação Pulse Secure Pulse Connect Secure nas versões 8.2 até 8.2R12.1, 8.3 até 8.3R7.1 e 9.0 até 9.0R3.4.
- Esta vulnerabilidade permite a um utilizador não autenticado aceder a qualquer ficheiro da vítima (usando path traversal).
- Sistemas Operativos afetados: Windows, Linux, macOs, IOS, Android, Windows Phone.

## Catalogação

- Reportado pela própria Pulse Secure, juntamente com outras vulnerabilidades também detetadas no seu produto.
- Reportado a 24 de abril de 2019, mas ganhou relevo quando foi publicado o primeiro PoC a 20 de agosto de 2019.
- O primeiro PoC foi publicado por Alyssa Herrera e Justin Wagner.
- Foi-lhe atribuido o nível de gravidade máximo (10.0).

## Exploit

- Recorrendo a URI's manipulados, o atacante pode aceder a todos os ficheiros do servidor alvo (path traversal)
- Já existem repositórios públicos no GitHub com código para fazer exploit e o Metasploit já incluiu um módulo também para usar a vulnerabilidade referida
- Exemplo de exploit: https://www.exploit-db.com/exploits/47297

## Ataques

- Esta falha de segurança permite que um utilizador não autenticado aceda a mais de 10 mil servidores trivialmente.
- Acredita-se que esta vulnerabilidade é responsável pela 3ª maior violação de dados da história dos EUA.
- Esta fraqueza permitiu que hackers, alegadamente apoiados pelo governo chinês, acedessem a agências governamentais americanas durante meses.
- Também foi usada em ataques de ransomware Sodinokibi, que reportou 2 mil milhões de doláres em resgates.

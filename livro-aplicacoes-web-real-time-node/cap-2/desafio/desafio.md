Antes de finalizar esse capítulo, quero propor um desafio. Já que aprendemos a utilizar os módulos HTTP, URL e FS (File System), que tal reorganizar a nossa aplicação para renderizar um determinado arquivo HTML baseado no path da URL?
As	regras	do	desafio	são:

- Crie  3 arquivos	HTML: artigos.html,contato.html	e erro.html	
- Coloque qualquer conteúdo para cada página HTML; Ao digitar no browser o path, /artigos deve renderizar artigos.html ;
- A regra anterior também se aplica para o arquivo contato.html ;
- Ao digitar qualquer path diferente de /artigos e /contato , deve renderizar erro.html ;
- A leitura dos arquivos HTML deve ser assíncrona;
- A rota principal " / " deve renderizar artigos.html .
<hr>

Algumas	dicas	importantes:

1. Utilize o retorno da função url.parse() para capturar o pathname digitado e renderizar o HTML correspondente. Se o pathname estiver vazio, significa que deve renderizar a página de artigos, e se estiver com um valor diferente do nome dos arquivos HTML, renderize a página de erros.
2. Você também pode inserir conteúdo HTML na função response.end(html) , economizando linha de código ao
não usar a função response.write(html) .
3. Utilize a função fs.existsSync(html) para verificar se
existe o HTML com o mesmo nome do pathname digitado.
# Nayara — 40 Years, Countless Memories

Site estático em HTML/CSS/JavaScript.

## Arquivos
- `index.html` — páginas e conteúdo
- `style.css` — visual responsivo
- `script.js` — carrinho, fluxo Zelle, formulário e painel local
- `reference.jpg` — arte enviada como referência visual

## Como usar
Abra `index.html` em um navegador ou publique a pasta em qualquer hospedagem de arquivos estáticos.

## Personalização rápida
No `script.js`:
1. Troque `SEU E-MAIL OU NÚMERO` pelo contato real do Zelle.
2. Troque a senha `nayara40` por outra.
3. Edite a lista `gifts` para alterar nomes, descrições e valores.

## Importante sobre o painel
Esta primeira versão é 100% estática. Os registros do formulário e o painel usam `localStorage`, portanto ficam somente no navegador/dispositivo em que foram registrados.

Isso NÃO é um painel administrativo seguro para produção e não sincroniza dados entre celulares/computadores.

Para a versão final, o painel pode ser ligado a Google Sheets + Apps Script ou a um pequeno backend. O fluxo de pagamento continua manual: o site registra `Aguardando confirmação`, e você confirma o pagamento quando o Zelle aparecer na sua conta.

## E-mail
Envio automático de e-mail não está conectado nesta versão estática. Pode ser adicionado depois via Apps Script ou outro serviço.

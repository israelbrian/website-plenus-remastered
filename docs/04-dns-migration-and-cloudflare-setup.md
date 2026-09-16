# 📋 Guia de Migração DNS, Configuração Cloudflare e Backup de Registros
**Projeto:** Website Plenus Remastered (`plenusplanejados.com.br`)  
**Data:** 08/09/2026  
**Provedor de Origem:** JSEVEN (cPanel)  
**Provedor de Destino:** Cloudflare (Workers / Pages & DNS)  

---

## 📌 Visão Geral & Objetivos

Este documento é o guia definitivo e manual de backup para a migração e apontamento de DNS do domínio `plenusplanejados.com.br` e `www.plenusplanejados.com.br` para a infraestrutura da Cloudflare.

Ele serve tanto para a **execução imediata** quanto como **manual de replicação**, permitindo que no futuro o domínio e as configurações possam ser facilmente transferidos ou reconfigurados na conta Cloudflare própria do cliente.

---

## 📂 1. Backup da Configuração Antiga (Origem: cPanel / JSEVEN)

### 1.1 Registros DNS Legados (Zone Editor cPanel)

| Tipo | Nome / Host | Valor / Destino | TTL | Finalidade / Descrição |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `plenusplanejados.com.br.` | `128.201.72.202` | 14400 | Servidor Web antigo (JSEVEN) |
| **A** | `localhost.plenusplanejados.com.br.` | `127.0.0.1` | 14400 | Loopback local |
| **A** | `ftp.plenusplanejados.com.br.` | `128.201.72.202` | 14400 | Acesso FTP cPanel |
| **A** | `cpanel.plenusplanejados.com.br.` | `128.201.72.202` | 14400 | Painel cPanel |
| **A** | `whm.plenusplanejados.com.br.` | `128.201.72.202` | 14400 | Painel WHM |
| **A** | `webmail.plenusplanejados.com.br.` | `128.201.72.202` | 14400 | Webmail cPanel (Entrada HTTP) |
| **A** | `webdisk.plenusplanejados.com.br.` | `128.201.72.202` | 14400 | Webdisk cPanel |
| **MX** | `plenusplanejados.com.br.` | Prioridade: `0`<br>Destino: `mail.plenusplanejados.com.br` | 14400 | Recebimento de E-mails cPanel |
| **CNAME** | `mail.plenusplanejados.com.br.` | `plenusplanejados.com.br` | 14400 | Apontamento do subdomínio de e-mail |
| **CNAME** | `www.plenusplanejados.com.br.` | `plenusplanejados.com.br` | 14400 | Apontamento WWW legado |
| **TXT** | `default._domainkey.plenusplanejados.com.br.` | `v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAEAuLiaE4tJKujYWbnp5rbQqxr0mks8AW0Z+jAH0OSPXa2B1ul5QSf1aE69SOejcTCd9VAColmHQ6NfwYFKMOHWqKVtX3JHAZL8WItAoyLRKmUoHKI7rUCK8J5QLitKp7PvTIsC6/QY7iXB80HXEgOrd+y/yubLYSDr5+2Csp6i/u6PlqGX5coHROuVQFAJeVmbvMa8gwg+57eRH9n7qV+yok2DFKxNKlRII1pD1UChC8fps+j7Of4NrX17pBJZk00bjhpjndLA+QEaEhPy0QMoUSOgazQy8IjKOLgMOFXRH2TKifA/YnqGlGyGWncQp0BXNHfkDFQcm0aNF+g5vBFwIDAQAB` | 14400 | Chave DKIM de autenticação de e-mails cPanel |
| **TXT** | `resend._domainkey.orcamento.plenusplanejados.com.br.` | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+qjYfpQALaOm3+nBEc5uTQa1sOZ3Krv9LrC4W1dRhhg/dQ/Raj+biU/37pdLgv23mGKlJpXdkGZMTBQemyLS+2KVqvuwImG3+0WAnxOgyKs3CC7F1lxwoq0dX4/5xolK5CrV0DavkEmUrsw/h0EBBASzPsgzTXkZyo/zm3QwZupwIDAQAB` | 14400 | Autenticação DKIM do serviço Resend (disparo de orçamentos) |
| **MX** | `send.orcamento.plenusplanejados.com.br.` | Prioridade: `10`<br>Destino: `feedback-smtp.sa-east-1.amazonses.com` | 14400 | Servidor de retorno de e-mails do Resend |
| **TXT** | `send.orcamento.plenusplanejados.com.br.` | `v=spf1 include:amazonses.com ~all` | 14400 | Regra SPF para autorizar envios pelo Resend |
| **TXT** | `_dmarc.plenusplanejados.com.br.` | `v=DMARC1; p=none;` | 14400 | Política DMARC de proteção contra spoofing |

### 1.2 Estado dos Arquivos no cPanel (`public_html`)
- **Redirecionamento Provisório (Remover após migração):** Havia um arquivo `index.html` contendo `<meta http-equiv="refresh" content="0; url = https://website-plenus-remastered.zdesenhos.workers.dev/" />`.
- **Ação necessária:** Após os Nameservers da Cloudflare estarem ativos, fazer backup compactado (ZIP) da pasta `public_html` e limpar o seu conteúdo (mantendo a pasta `public_html` existente).

---

## 🛠️ 2. Passo a Passo da Configuração na Cloudflare

### Passo 2.1: Cadastrar o Domínio
1. Acesse o [Dashboard da Cloudflare](https://dash.cloudflare.com/).
2. Clique em **Add a site** (Adicionar um site).
3. No campo **Domain name**, digite exatamente o domínio raiz (SEM `www`):
   ```text
   plenusplanejados.com.br
   ```
4. Selecione o plano **Free ($0)** e clique em **Continue**.
5. Mantenha a opção de **Import DNS records** como **Automatic**.

### Passo 2.2: Conferência e Adição dos Registros DNS no Painel Cloudflare

Garantir que a tabela DNS na Cloudflare possua exatamente os seguintes registros:

#### A) Front-end (Website Next.js / Cloudflare Worker)
* **Custom Domain no Worker (`website-plenus-remastered`):**
  - Adicionar `plenusplanejados.com.br` em *Workers & Pages > website-plenus-remastered > Settings > Domains & Routes > Custom Domains*.
* **Registro WWW (CNAME):**
  - **Type:** `CNAME` | **Name:** `www` | **Target:** `plenusplanejados.com.br` | **Proxy Status:** 🟠 **Proxied (Nuvem Laranja)**

#### B) E-mails Corporativos (JSEVEN / Webmail)
* **Servidor MX:**
  - **Type:** `MX` | **Name:** `@` | **Mail Server:** `mail.plenusplanejados.com.br` | **Priority:** `0`
* **Subdomínio de E-mail (A):**
  - **Type:** `A` | **Name:** `mail` | **IPv4:** `128.201.72.202` | **Proxy Status:** 🔘 **DNS Only (Nuvem Cinzenta)**
* **Subdomínio de Webmail (A):**
  - **Type:** `A` | **Name:** `webmail` | **IPv4:** `128.201.72.202` | **Proxy Status:** 🔘 **DNS Only (Nuvem Cinzenta)**
* **DKIM cPanel (TXT):**
  - **Type:** `TXT` | **Name:** `default._domainkey` | **Content:** `v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAEAuLiaE4tJKujYWbnp5rbQqxr0mks8AW0Z+jAH0OSPXa2B1ul5QSf1aE69SOejcTCd9VAColmHQ6NfwYFKMOHWqKVtX3JHAZL8WItAoyLRKmUoHKI7rUCK8J5QLitKp7PvTIsC6/QY7iXB80HXEgOrd+y/yubLYSDr5+2Csp6i/u6PlqGX5coHROuVQFAJeVmbvMa8gwg+57eRH9n7qV+yok2DFKxNKlRII1pD1UChC8fps+j7Of4NrX17pBJZk00bjhpjndLA+QEaEhPy0QMoUSOgazQy8IjKOLgMOFXRH2TKifA/YnqGlGyGWncQp0BXNHfkDFQcm0aNF+g5vBFwIDAQAB`

#### C) Disparos de Orçamento (Resend / Amazon SES)
* **DKIM Resend (TXT):**
  - **Type:** `TXT` | **Name:** `resend._domainkey.orcamento` | **Content:** `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+qjYfpQALaOm3+nBEc5uTQa1sOZ3Krv9LrC4W1dRhhg/dQ/Raj+biU/37pdLgv23mGKlJpXdkGZMTBQemyLS+2KVqvuwImG3+0WAnxOgyKs3CC7F1lxwoq0dX4/5xolK5CrV0DavkEmUrsw/h0EBBASzPsgzTXkZyo/zm3QwZupwIDAQAB`
* **MX Resend:**
  - **Type:** `MX` | **Name:** `send.orcamento` | **Mail Server:** `feedback-smtp.sa-east-1.amazonses.com` | **Priority:** `10`
* **SPF Resend (TXT):**
  - **Type:** `TXT` | **Name:** `send.orcamento` | **Content:** `v=spf1 include:amazonses.com ~all`

#### D) Segurança Anti-Spam
* **DMARC (TXT):**
  - **Type:** `TXT` | **Name:** `_dmarc` | **Content:** `v=DMARC1; p=none;`

> [!CAUTION]
> **REGRA CRÍTICA:** Todos os registros de e-mail (`mail`, `webmail`) **DEVEM** utilizar **Nuvem Cinzenta (DNS Only)**. Se ficarem em Nuvem Laranja (Proxied), o tráfego de e-mails IMAP/POP3/SMTP será bloqueado!

---

## 🔄 3. Alteração dos Nameservers no Provedor (JSEVEN / Registro.br)

1. No final do fluxo de adição da Cloudflare, serão exibidos os 2 Nameservers oficiais da conta.
2. Acesse o painel da **JSEVEN** (ou Registro.br) onde o domínio foi comprado.
3. Vá em **Domínios > Configurações de DNS / Servidores de Nome**.
4. Altere os servidores DNS antigos (`ns1.jsevenprovedor.com.br`, etc.) para os 2 servidores da Cloudflare fornecidos.
5. Salve e aguarde a propagação (normalmente de 15 minutos a 24 horas).

---

## 🔀 4. Guia de Migração Futura (Transferência de Conta Cloudflare)

Caso no futuro você precise transferir este projeto da sua conta Cloudflare para a **conta própria do cliente**:

### Passo A: Exportar a Zona DNS da Conta Atual
1. Na conta Cloudflare atual, acesse a zona `plenusplanejados.com.br`.
2. Vá em **DNS > Records**.
3. Clique em **Export** (ao lado de *Import DNS Records*).
4. Isso baixará um arquivo `.txt` em formato BIND contendo todas as entradas DNS intactas.

### Passo B: Adicionar o Domínio na Nova Conta Cloudflare (do Cliente)
1. Faça login na nova conta da Cloudflare do cliente.
2. Clique em **Add a Site** > digite `plenusplanejados.com.br`.
3. Escolha o plano **Free**.
4. Na etapa de DNS, você pode usar a opção **Import DNS Records** e carregar o arquivo `.txt` exportado no Passo A.

### Passo C: Atualizar os Nameservers no Registrar (JSEVEN / Registro.br)
1. A nova conta da Cloudflare gerará **2 novos Nameservers diferentes** (ex: `devon.ns.cloudflare.com` e `nora.ns.cloudflare.com`).
2. Acesse a JSEVEN / Registro.br e atualize os Nameservers para estes 2 novos.

### Passo D: Recriar o Custom Domain no Worker (se o Worker também for migrado)
1. Na nova conta, vincule o Worker/Pages do Next.js e adicione `plenusplanejados.com.br` na aba **Custom Domains**.
2. O certificado SSL/TLS será renovado automaticamente para a nova conta.

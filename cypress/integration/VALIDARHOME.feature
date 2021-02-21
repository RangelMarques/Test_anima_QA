#language: pt
Funcionalidade: VALIDARHOME

 Criando usuario e validando informaçoes de tela

Cenario: VALIDAR TELA HOME
  Dado que eu acesso o site
  Entao valido a tela home
  Entao valida a url

 Cenario: TELA CRIAR USUARIO
   Dado que eu acesso o site
   Quando clico em começar automação
   Entao devo clicar em formulario
   Quando clico em criar usuario
   Entao preencho o formulario
   Entao valida a mensagem de sucesso

  Cenario: VALIDAR CAMPO OBRIGATORIO
   Dado que eu acesso o site
   Quando clico em começar automação
   Entao devo clicar em formulario
   Quando clico em criar usuario
   Entao falha ao preencher o formulario
   Entao valido campo obrigatorio

  Cenario: VOLTAR
   Dado que eu acesso o site
   Quando clico em começar automação
   Entao devo clicar em formulario
   Quando clico em criar usuario
   Entao preencho o formulario
   Entao valida a mensagem de sucesso
   Entao voltar pagina

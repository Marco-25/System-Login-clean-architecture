## configurar github

    - git config --global core.editor code
    - git config --global --edit

        [push]
            followTags = true
        [core]
            editor = code --wait
        [alias]
            s = !git status -s
            c = !git add --all && git commit -m
            l = !git log --pretty=format:'%C(yellow)%h%C(blue)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'

## padroes de commit

    - docs indicam que houveram mudanças na documentação, como por exemplo no Readme do seu repositório. (Não inclui alterações em código).
    - style indicam que houveram alterações referentes a formatações de código, trailing spaces, lint... (Não inclui alterações em código).
    - refactor refere-se a mudanças devido a refatorações que não alterem sua funcionalidade, ou melhorias de performance devido a um code review.
    - build utilizados quando são realizadas modificações em arquivos de build e dependências.
    - test utilizados quando são realizadas alterações em testes, seja criando, alterando ou excluindo testes unitários. (Não inclui alterações em código)
    - chore indicam atualizações de tarefas de build, configurações de administrador, pacotes. (Não inclui alterações em código)

## adiconar arquivo a commit ja feito

    - git add .
    - git commit --amend --no-edit 
    - voltar ommit
        - git checkout HEAD~1

## criar tag

    - git tag "1.0" - local ( -m "mensagem não é obrigatorio")
    - git tag -a "1.0.0" - remota ( -m "mensagem não é obrigatorio")
    - git tag - listar tags
    ##### Enviar tags para o git
        - git push origin branchName --tags (envia todas as tags não é recomendavel)
        - git push origin branchName --follow-tags (recomendavel)

##### OBS: utilize npx jest 

#### limpar cache do jest 

    - npx jest --clearCache

    aula 07 00:45:07

    mongo start
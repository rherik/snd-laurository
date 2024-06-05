# Concatenar cada nome que esteja armazenado em sua própria variável do seu namorado
# Ex: Nome = jdsbjbsda
# segundo nome = hfsjdjfsjd


primeiro_nome = "herik "
nome_composto = "alexandre "
primeiro_sobrenome = "rosa "
segundo_sobrenome = "da CUnha"
nome_completo = primeiro_nome + nome_composto + primeiro_sobrenome + segundo_sobrenome
#print(primeiro_nome[:2])
teste = input(f"O nome completo do seu namorado é {nome_completo}.\n Quer trocar o nome do seu namorado(s/n)?")

if teste[0].capitalize() == 'S':
    nome_completo_input = input("Digite o nome completo: ")
    if nome_completo_input == nome_completo:
        print("O nome inserido o é o mesmo armazenado: ", nome_completo)
    else:
        nome_completo = nome_completo_input
        print("O novo nome do seu namorado é: ", nome_completo)

else:
    print("Programa finalizado.")
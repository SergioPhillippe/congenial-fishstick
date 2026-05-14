#funções

def olaMundo():
    print('Olá, mundo!')

def olaPessoa(nome):
    print(f'Olá, {nome}')

def dobro(numero):
    return numero * 2

def multiplicaDoisNumeros(a, b = 2):
    #Multiplica dois números
    return a * b

x = 5 # Variável global
def soma():
    x = 10 # Variável local
    print(x)
    return x + 1 
soma()
print(x)
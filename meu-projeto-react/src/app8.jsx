
/*
O filter() é preferível ao splice() porque o filter()
cria um novo array sem modificar o array original.

O React precisa que o estado seja atualizado com uma nova
referência para identificar a mudança e renderizar a tela.

O splice() modifica diretamente o array original, o que não é
recomendado para trabalhar com estados no React.
*/

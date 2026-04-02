import json

def converter_itf_para_json(arquivo_itf, arquivo_json):
    dados = []
    
    with open(arquivo_itf, 'r', encoding='utf-8') as f:
        # Exemplo: Supondo que a primeira linha seja o cabeçalho
        # Se não tiver cabeçalho, terás de definir as chaves manualmente
        linhas = f.readlines()
        cabecalho = linhas[0].strip().split(';') # Ajuste o separador se necessário

        for linha in linhas[1:]:
            valores = linha.strip().split(';')
            # Cria um dicionário mapeando cabeçalho -> valor
            item = dict(zip(cabecalho, valores))
            dados.append(item)

    # Escreve o ficheiro JSON
    with open(arquivo_json, 'w', encoding='utf-8') as f_json:
        json.dump(dados, f_json, indent=4, ensure_ascii=False)

    print(f"Conversão concluída: {arquivo_json}")

# Uso:
converter_itf_para_json('seu_arquivo.itf', 'resultado.json')
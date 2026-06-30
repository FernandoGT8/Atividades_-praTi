document.addEventListener('DOMContentLoaded', () => {
    const btnCadastro = document.getElementById('btnSubmitCadastro');
    const emailInput = document.getElementById('userEmail');
    const emailError = document.getElementById('emailError');
    const registrationForm = document.getElementById('registrationForm');

    // Impede que o formulário recarregue a página caso apertem "Enter" no input
    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => e.preventDefault());
    }

    if (btnCadastro) {
        btnCadastro.addEventListener('click', async (e) => {
            e.preventDefault(); // Garante que o navegador não atualize a página
            
            const emailValue = emailInput.value.trim();
            const btnContent = btnCadastro.querySelector('.btn-content');
            
            // 1. VALIDAÇÃO DO FORMATO DO EMAIL (FRONT-END)
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailValue || !emailRegex.test(emailValue.toLowerCase())) {
                emailError.textContent = 'Por favor, insira um email válido.';
                emailError.style.display = 'block';
                emailInput.style.outline = '2px solid #eb5757';
                return;
            }

            // Limpa mensagens e bordas de erro anteriores
            emailError.style.display = 'none';
            emailInput.style.outline = 'none';

            try {
                // Feedback visual de processamento (Loading)
                btnContent.textContent = 'Cadastrando...';
                btnCadastro.style.pointerEvents = 'none';

                // 2. REQUISIÇÃO ASSÍNCRONA PARA API PÚBLICA E ESTÁVEL (JSONPlaceholder)
                // Envia uma requisição POST real para simular a criação do usuário
                const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: emailValue,
                        username: emailValue.split('@')[0],
                        website: "laraflix.com"
                    })
                });

                // Se o servidor retornar qualquer erro, dispara a falha
                if (!response.ok) {
                    throw new Error(`Erro no servidor: ${response.status}`);
                }

                // Processa a resposta em JSON vinda do servidor
                const data = await response.json();
                console.log('Sucesso! Usuário registrado na API:', data);

                // 3. ATUALIZAÇÃO DINÂMICA DO DOM (MENSAGEM DE SUCESSO)
                registrationForm.innerHTML = `
                    <div style="animation: fadeIn 0.5s ease; padding: 2rem; background: rgba(0,0,0,0.9); border-radius: 8px; border: 1px solid var(--primary-color); text-align: center;">
                        <h3 style="color: var(--text-color); font-size: 1.75rem; margin-bottom: 0.5rem;">Pronto! Conta criada.</h3>
                        <p style="color: var(--text-muted); font-size: 1.1rem;">Enviamos um link de acesso para:<br><strong style="color: #fff;">${data.email}</strong></p>
                        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 1.5rem;">ID registrado via API externa: <span style="color: #27ae60; font-family: monospace; font-weight: bold;">#${data.id}</span></p>
                    </div>
                `;

            } catch (error) {
                console.error('Erro detectado na requisição:', error);
                
                // Exibe o erro na interface de forma amigável
                emailError.textContent = 'Erro ao conectar com o servidor de cadastro. Tente novamente.';
                emailError.style.display = 'block';
                
                // Restaura o estado original do botão em caso de falha de rede
                btnContent.innerHTML = `Vamos lá <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>`;
                btnCadastro.style.pointerEvents = 'auto';
            }
        });
    }

    // Limpa os alertas visuais de erro imediatamente assim que o usuário digita no campo
    if (emailInput) {
        emailInput.addEventListener('input', () => {
            emailError.style.display = 'none';
            emailInput.style.outline = 'none';
        });
    }
});
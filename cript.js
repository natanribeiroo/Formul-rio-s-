const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

        const nome = document.getElementById("nome").value;
            const idade = document.getElementById("idade").value;
                const interesse = document.getElementById("interesse").value;
                    const motivo = document.getElementById("motivo").value;
                        const opiniao = document.getElementById("opiniao").value;

                            const dirigiu = document.querySelector(
                                    'input[name="dirigiu"]:checked'
                                        ).value;

                                            const autonomia = document.querySelector(
                                                    'input[name="autonomia"]:checked'
                                                        ).value;

                                                            resultado.innerHTML = `
                                                                    <h2>Obrigado por responder, ${nome}! 🚗⚡</h2>
                                                                            <p><strong>Idade:</strong> ${idade}</p>
                                                                                    <p><strong>Já dirigiu:</strong> ${dirigiu}</p>
                                                                                            <p><strong>Interesse em comprar:</strong> ${interesse}</p>
                                                                                                    <p><strong>Principal motivo:</strong> ${motivo}</p>
                                                                                                            <p><strong>Opinião sobre autonomia:</strong> ${autonomia}</p>
                                                                                                                    <p><strong>Sua opinião:</strong> ${opiniao}</p>
                                                                                                                        `;

                                                                                                                            resultado.style.backgroundColor = "#e8f5e9";
                                                                                                                                resultado.style.color = "#16803c";

                                                                                                                                });
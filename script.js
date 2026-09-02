const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbyHrFgW68jkZmPzkGKuNEnMRjaViiN2ydBbY-B-pHj8d2SBa21xDG9JB4hJoyxYFG_a/exec";

const translations = {
  pt: {
    meta: {
      title: "Nayara — 40 anos",
      description: "Nayara — 40 anos. 40 Years, Countless Memories.",
    },
    nav: {
      home: "Início",
      gifts: "Presentes",
      cartLabel: "Carrinho",
      shareTitle: "Compartilhar",
    },
    home: {
      eyebrow: "UMA DATA • UMA AVENTURA • MUITAS MEMÓRIAS",
      ageLabel: "ANOS",
      script: "40 Years, Countless Memories",
      heroText:
        "Neste aniversário, troquei presentes por algo que vou guardar para sempre: novas experiências e memórias ao lado da minha família. ❤️",
      ctaPrimary: "🎁 Escolher meu presente",
      ctaSecondary: "Conheça a ideia ↓",
      heroImageAlt: "Arte de referência do aniversário de 40 anos",
    },
    story: {
      title: "Um presente que vai virar memória.",
      p1:
        "Para comemorar meus 40 anos, decidi trocar presentes por algo que vou guardar para sempre: <strong>novas experiências e memórias ao lado da minha família.</strong> ❤️",
      p2:
        "Se você quiser me presentear, preparei algumas opções para você escolher. Cada contribuição fará parte da nossa próxima aventura em família! ✨",
      quote: "O melhor presente é ter você comigo nesse dia!",
      author: "— Nayara",
    },
    banner: {
      small: "ANOS",
      text: "Uma pequena contribuição.<br><strong>Uma grande memória.</strong>",
    },
    progress: {
      label: "JÁ ESTAMOS CRIANDO MEMÓRIAS",
      value: "62% completa! ✈️",
    },
    gifts: {
      eyebrow: "ESCOLHA UMA MEMÓRIA",
      title: "🎁 Escolha seu presente",
      description: "Você pode escolher mais de uma opção e montar seu próprio presente.",
      add: "Adicionar ao carrinho",
    },
    custom: {
      eyebrow: "PREFERE ESCOLHER OUTRO VALOR?",
      title: "Escolha seu próprio presente",
      description: "Você decide quanto deseja contribuir para a nossa próxima aventura.",
      placeholder: "Outro valor",
      button: "Adicionar",
      name: "Meu próprio valor",
    },
    cart: {
      eyebrow: "SEU PRESENTE",
      title: "🛒 Carrinho",
      description: "Revise sua escolha antes de continuar.",
      summary: "RESUMO",
      subtotal: "Subtotal",
      total: "Total",
      checkout: "Continuar para pagamento →",
      back: "← Escolher mais presentes",
      emptyTitle: "Seu carrinho está vazio.",
      emptyDescription: "Escolha uma memória para fazer parte dessa aventura.",
      emptyButton: "Escolher presente",
      each: "cada",
      removeTitle: "Remover",
    },
    zelle: {
      eyebrow: "PAGAMENTO MANUAL",
      title: "💳 Pague pelo Zelle",
      total: 'Seu presente: <strong id="zelleTotal">$0</strong>',
      contactLabel: "📱 Zelle",
      copy: "Copiar",
      stepsTitle: "Como pagar",
      step1: "Abra o aplicativo do seu banco.",
      step2: "Escolha <strong>Zelle</strong>.",
      step3: "Envie o valor do seu presente para o contato acima.",
      step4: "No campo de mensagem, coloque <strong>Nayara 40 + seu nome</strong>.",
      step5: "Depois clique em “Já fiz o pagamento”.",
      notice:
        '💡 <strong>Importante:</strong> seu presente ficará como “Aguardando confirmação” até que o pagamento seja identificado.',
      done: "✓ Já fiz o pagamento",
      back: "← Voltar ao carrinho",
    },
    confirm: {
      eyebrow: "QUASE LÁ",
      title: "🧾 Confirme seu presente",
      description:
        "Depois de enviar pelo Zelle, preencha seus dados para que a Nayara consiga identificar e agradecer sua contribuição.",
      valueLabel: 'Valor informado: <strong id="confirmTotal">$0</strong>',
      name: "Seu nome *",
      namePlaceholder: "Como você gostaria de ser identificado?",
      amount: "Valor enviado *",
      message: "Mensagem para a Nayara (opcional)",
      messagePlaceholder: "Deixe uma mensagem especial...",
      anonymous: "Quero que meu presente seja anônimo.",
      paid: "Já fiz o pagamento pelo Zelle.",
      submit: "🎉 Confirmar meu presente",
    },
    thanks: {
      eyebrow: "40 YEARS • COUNTLESS MEMORIES",
      title: "Muito obrigada! ❤️",
      lead: "Seu presente já faz parte dessa nova aventura.",
      body: "Mais do que um valor, você está ajudando a criar uma memória que vamos levar para sempre.",
      signature: "Com carinho,<br><strong>Nayara</strong>",
      button: "Voltar ao início",
    },
    admin: {
      eyebrow: "ÁREA PRIVADA",
      title: "📊 Painel da Nayara",
      description: "Versão local: os registros ficam neste navegador.",
      loginIntro: "Digite a senha para abrir o painel.",
      enter: "Entrar",
      passwordPlaceholder: "Senha",
      small: 'Senha inicial: <code>nayara40</code> — altere em <code>script.js</code> antes de publicar.',
      peopleLabel: "Presentes",
      totalLabel: "Total registrado",
      pendingLabel: "Aguardando confirmação",
      tableDate: "Data",
      tableName: "Nome",
      tableValue: "Valor",
      tableItems: "Itens",
      tableStatus: "Status",
      tableMessage: "Mensagem",
      clear: "Apagar registros deste navegador",
    },
    footer: {
      text: "40 Years, Countless Memories ✨",
      adminLink: "Área privada",
    },
    record: {
      pending: "Aguardando confirmação",
      paid: "Pago",
    },
    toast: {
      giftAdded: "{name} adicionado ao carrinho!",
      customAdded: "Seu valor foi adicionado!",
      validValue: "Digite um valor válido.",
      itemRemoved: "Item removido.",
      cartEmpty: "Adicione um presente primeiro.",
      zelleCopied: "Contato Zelle copiado!",
      linkCopied: "Link copiado!",
      copyFallback: "Copie o endereço desta página.",
      anonymous: "Seu nome ficará anônimo no painel.",
      shareError: "Não foi possível compartilhar agora.",
    },
  },
  en: {
    meta: {
      title: "Nayara — 40 years",
      description: "Nayara — 40 years. 40 Years, Countless Memories.",
    },
    nav: {
      home: "Home",
      gifts: "Gifts",
      cartLabel: "Cart",
      shareTitle: "Share",
    },
    home: {
      eyebrow: "ONE DATE • ONE ADVENTURE • MANY MEMORIES",
      ageLabel: "YEARS",
      script: "40 Years, Countless Memories",
      heroText:
        "For my birthday, I traded presents for something I will keep forever: new experiences and memories with my family. ❤️",
      ctaPrimary: "🎁 Choose my gift",
      ctaSecondary: "See the idea ↓",
      heroImageAlt: "Reference art for the 40th birthday party",
    },
    story: {
      title: "A gift that will become a memory.",
      p1:
        "To celebrate my 40th birthday, I decided to trade gifts for something I will keep forever: <strong>new experiences and memories with my family.</strong> ❤️",
      p2:
        "If you’d like to give me a gift, I prepared a few options for you to choose from. Every contribution will be part of our next family adventure! ✨",
      quote: "The best gift is having you with me on this day!",
      author: "— Nayara",
    },
    banner: {
      small: "YEARS",
      text: "A small contribution.<br><strong>A big memory.</strong>",
    },
    progress: {
      label: "WE ARE ALREADY MAKING MEMORIES",
      value: "62% complete! ✈️",
    },
    gifts: {
      eyebrow: "CHOOSE A MEMORY",
      title: "🎁 Choose your gift",
      description: "You can pick more than one option and build your own gift.",
      add: "Add to cart",
    },
    custom: {
      eyebrow: "PREFER TO PICK ANOTHER AMOUNT?",
      title: "Choose your own gift",
      description: "You decide how much you want to contribute to our next adventure.",
      placeholder: "Other amount",
      button: "Add",
      name: "My own amount",
    },
    cart: {
      eyebrow: "YOUR GIFT",
      title: "🛒 Cart",
      description: "Review your choice before continuing.",
      summary: "SUMMARY",
      subtotal: "Subtotal",
      total: "Total",
      checkout: "Continue to payment →",
      back: "← Choose more gifts",
      emptyTitle: "Your cart is empty.",
      emptyDescription: "Pick a memory to be part of this adventure.",
      emptyButton: "Choose gift",
      each: "each",
      removeTitle: "Remove",
    },
    zelle: {
      eyebrow: "MANUAL PAYMENT",
      title: "💳 Pay with Zelle",
      total: 'Your gift: <strong id="zelleTotal">$0</strong>',
      contactLabel: "📱 Zelle",
      copy: "Copy",
      stepsTitle: "How to pay",
      step1: "Open your banking app.",
      step2: "Choose <strong>Zelle</strong>.",
      step3: "Send the value of your gift to the contact above.",
      step4: 'In the memo field, write <strong>Nayara 40 + your name</strong>.',
      step5: 'Then click “I already paid”.',
      notice:
        '💡 <strong>Important:</strong> your gift will stay as “Pending confirmation” until the payment is identified.',
      done: "✓ I already paid",
      back: "← Back to cart",
    },
    confirm: {
      eyebrow: "ALMOST THERE",
      title: "🧾 Confirm your gift",
      description:
        "After sending it through Zelle, fill in your details so Nayara can identify and thank your contribution.",
      valueLabel: 'Reported amount: <strong id="confirmTotal">$0</strong>',
      name: "Your name *",
      namePlaceholder: "How would you like to be identified?",
      amount: "Sent amount *",
      message: "Message for Nayara (optional)",
      messagePlaceholder: "Leave a special message...",
      anonymous: "I want my gift to be anonymous.",
      paid: "I already paid via Zelle.",
      submit: "🎉 Confirm my gift",
    },
    thanks: {
      eyebrow: "40 YEARS • COUNTLESS MEMORIES",
      title: "Thank you! ❤️",
      lead: "Your gift is now part of this new adventure.",
      body: "More than a value, you are helping create a memory we will carry forever.",
      signature: "With love,<br><strong>Nayara</strong>",
      button: "Back to home",
    },
    admin: {
      eyebrow: "PRIVATE AREA",
      title: "📊 Nayara’s dashboard",
      description: "Local version: records stay in this browser.",
      loginIntro: "Enter the password to open the dashboard.",
      enter: "Enter",
      passwordPlaceholder: "Password",
      small: 'Initial password: <code>nayara40</code> — change it in <code>script.js</code> before publishing.',
      peopleLabel: "Gifts",
      totalLabel: "Recorded total",
      pendingLabel: "Pending confirmation",
      tableDate: "Date",
      tableName: "Name",
      tableValue: "Value",
      tableItems: "Items",
      tableStatus: "Status",
      tableMessage: "Message",
      clear: "Clear records from this browser",
    },
    footer: {
      text: "40 Years, Countless Memories ✨",
      adminLink: "Private area",
    },
    record: {
      pending: "Pending confirmation",
      paid: "Paid",
    },
    toast: {
      giftAdded: "{name} added to cart!",
      customAdded: "Your amount was added!",
      validValue: "Please enter a valid amount.",
      itemRemoved: "Item removed.",
      cartEmpty: "Add a gift first.",
      zelleCopied: "Zelle contact copied!",
      linkCopied: "Link copied!",
      copyFallback: "Copy this page address.",
      anonymous: "Your name will be hidden in the dashboard.",
      shareError: "Could not share right now.",
    },
  },
};

const giftCatalog = {
  pt: [
    ["☕", "Um café durante a viagem", 25, "Um pequeno momento para começar o dia juntos."],
    ["🍦", "Um mimo para a família", 40, "Um carinho para deixar a viagem ainda mais gostosa."],
    ["🍽️", "Uma refeição em família", 75, "Ajude a tornar uma noite da nossa viagem ainda mais especial."],
    ["🚗", "Ajuda para o transporte", 100, "Uma mãozinha para chegarmos a cada nova aventura."],
    ["📸", "Uma lembrança para registrar a viagem", 125, "Para guardar em fotos um momento que não queremos esquecer."],
    ["🎟️", "Uma experiência especial", 150, "Ajude a transformar um dia comum em um aniversário em uma história para contar."],
    ["🌅", "Um passeio em família", 200, "Uma nova paisagem, boas conversas e uma memória para sempre."],
    ["🏨", "Uma noite de hospedagem", 250, "Um cantinho confortável para descansar durante a aventura."],
    ["🧳", "Uma parte da hospedagem", 300, "Sua contribuição ajuda a levar a família ainda mais longe."],
    ["✨", "Um dia de aventuras em família", 350, "Um dia inteiro para descobrir, rir e criar memórias."],
    ["🥂", "Uma experiência inesquecível", 400, "Para aquela experiência que vira história de família."],
    ["❤️", "Um presente especial para nossa viagem", 500, "Uma contribuição especial para tornar essa aventura possível."],
    ["✈️", "Ajuda para as passagens", 750, "Ajude a nos levar até o próximo capítulo da nossa história."],
    ["🌎", "Uma grande contribuição para nossa aventura", 1000, "Uma grande ajuda para uma grande aventura em família."],
  ],
  en: [
    ["☕", "A coffee during the trip", 25, "A small moment to start the day together."],
    ["🍦", "A family treat", 40, "A little treat to make the trip even sweeter."],
    ["🍽️", "A family meal", 75, "Help make one night of our trip even more special."],
    ["🚗", "Transportation help", 100, "A hand to get us to every new adventure."],
    ["📸", "A memory to capture the trip", 125, "So we can keep a moment we never want to forget in photos."],
    ["🎟️", "A special experience", 150, "Help turn an ordinary day into a story to tell."],
    ["🌅", "A family outing", 200, "A new view, good conversations, and a memory forever."],
    ["🏨", "One night of lodging", 250, "A cozy place to rest during the adventure."],
    ["🧳", "Part of the lodging", 300, "Your contribution helps take the family even farther."],
    ["✨", "A day of family adventures", 350, "An entire day to discover, laugh, and make memories."],
    ["🥂", "An unforgettable experience", 400, "For that special experience that becomes family history."],
    ["❤️", "A special gift for our trip", 500, "A special contribution to make this adventure possible."],
    ["✈️", "Help with the flights", 750, "Help us reach the next chapter of our story."],
    ["🌎", "A big contribution to our adventure", 1000, "A big help for a big family adventure."],
  ],
};

const STORAGE_KEYS = {
  cart: "nayaraCart",
  lang: "nayaraLang",
  records: "nayaraRecords",
};

const q = (selector) => document.querySelector(selector);
const qa = (selector) => [...document.querySelectorAll(selector)];

async function sendToGoogleSheets(payload) {
  if (typeof google !== "undefined" && google.script && google.script.run) {
    return new Promise((resolve) => {
      google.script.run
        .withSuccessHandler((result) => resolve({ ok: true, result, skipped: false }))
        .withFailureHandler((error) => resolve({ ok: false, skipped: false, error }))
        .salvarPresente(payload);
    });
  }

  if (!GOOGLE_SHEETS_URL || GOOGLE_SHEETS_URL.includes("SEU_ID_DO_WEB_APP")) {
    console.warn("Google Apps Script URL não configurada. Configure a constante GOOGLE_SHEETS_URL antes de publicar.");
    return { ok: true, skipped: true };
  }

  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Erro do servidor: ${response.status}`);
    }

    const result = await response.json().catch(() => ({}));
    return { ok: true, result, skipped: false };
  } catch (error) {
    console.error("Falha ao enviar para o Google Sheets:", error);
    return { ok: false, skipped: false, error };
  }
}

const preferredLang = (() => {
  const saved = localStorage.getItem(STORAGE_KEYS.lang);
  if (saved === "pt" || saved === "en") return saved;
  const browserLang = (navigator.language || "").toLowerCase();
  return browserLang.startsWith("en") ? "en" : "pt";
})();

const state = {
  lang: preferredLang,
  cart: loadCart(),
};

function t(key) {
  const [section, item] = key.split(".");
  return translations[state.lang]?.[section]?.[item] ?? translations.pt?.[section]?.[item] ?? key;
}

function formatTemplate(str, vars = {}) {
  return String(str).replace(/\{(\w+)\}/g, (_, name) => (name in vars ? vars[name] : `{${name}}`));
}

function toast(messageKeyOrText, vars = {}) {
  const value = translations[state.lang]?.toast?.[messageKeyOrText]
    ? formatTemplate(translations[state.lang].toast[messageKeyOrText], vars)
    : messageKeyOrText;
  const box = q("#toast");
  box.textContent = value;
  box.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => box.classList.remove("show"), 2400);
}

function money(amount) {
  return "$" + Number(amount || 0).toLocaleString(state.lang === "pt" ? "pt-BR" : "en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function normalizeCartItem(item) {
  if (!item || typeof item !== "object") return null;
  if (item.type === "gift" || item.type === "custom") return item;
  if (typeof item.id === "string" && /^g\d+$/.test(item.id)) {
    return {
      type: "gift",
      giftIndex: Number(item.id.slice(1)),
      price: Number(item.price) || 0,
      qty: Number(item.qty) || 1,
    };
  }
  return {
    type: "custom",
    price: Number(item.price) || 0,
    qty: Number(item.qty) || 1,
  };
}

function loadCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || "[]");
    return Array.isArray(parsed) ? parsed.map(normalizeCartItem).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(state.cart.map(normalizeCartItem).filter(Boolean)));
  updateCartCount();
}

function updateCartCount() {
  q("#cartCount").textContent = state.cart.reduce((sum, item) => sum + (Number(item.qty) || 0), 0);
}

function currentGiftCatalog() {
  return giftCatalog[state.lang] || giftCatalog.pt;
}

function renderGifts() {
  const catalog = currentGiftCatalog();
  q("#giftGrid").innerHTML = catalog
    .map(
      (gift, index) => `
        <article class="gift-card">
          <div>
            <div class="gift-icon">${gift[0]}</div>
            <h3>${gift[1]}</h3>
            <div class="price">${money(gift[2])}</div>
          </div>
          <div>
            <p>${gift[3]}</p>
            <button class="add-btn" type="button" onclick="addGift(${index})">${t("gifts.add")}</button>
          </div>
        </article>`
    )
    .join("");
}

function addGift(index) {
  const gift = currentGiftCatalog()[index];
  const existing = state.cart.find((item) => item.type === "gift" && item.giftIndex === index);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ type: "gift", giftIndex: index, price: gift[2], qty: 1 });
  }
  saveCart();
  toast("giftAdded", { name: gift[1] });
  location.hash = "carrinho";
}

function addCustom() {
  const input = q("#customAmount");
  const value = Number(input.value);
  if (!value || value < 1) {
    toast("validValue");
    return;
  }
  state.cart.push({ type: "custom", price: value, qty: 1 });
  input.value = "";
  saveCart();
  toast("customAdded");
  location.hash = "carrinho";
}

function cartItemName(item) {
  if (item.type === "gift") {
    const gift = currentGiftCatalog()[item.giftIndex];
    return gift ? gift[1] : t("custom.name");
  }
  return t("custom.name");
}

function renderCart() {
  const box = q("#cartItems");
  if (!state.cart.length) {
    box.innerHTML = `
      <div class="cart-empty">
        <div style="font-size:42px">🎁</div>
        <h3>${t("cart.emptyTitle")}</h3>
        <p>${t("cart.emptyDescription")}</p>
        <a class="btn primary" href="#presentes">${t("cart.emptyButton")}</a>
      </div>`;
  } else {
    box.innerHTML = state.cart
      .map((item, index) => {
        const name = cartItemName(item);
        const total = (Number(item.price) || 0) * (Number(item.qty) || 0);
        return `
          <div class="cart-row">
            <div>
              <h3>${name}</h3>
              <p>${money(item.price)} ${t("cart.each")}</p>
            </div>
            <div class="qty">
              <button type="button" onclick="changeQty(${index},-1)">−</button>
              <strong>${item.qty}</strong>
              <button type="button" onclick="changeQty(${index},1)">+</button>
            </div>
            <strong class="row-price">${money(total)}</strong>
            <button class="remove" type="button" onclick="removeItem(${index})" title="${t("cart.removeTitle")}">×</button>
          </div>`;
      })
      .join("");
  }

  const total = state.cart.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.qty) || 0), 0);
  q("#subtotal").textContent = money(total);
  q("#cartTotal").textContent = money(total);
  q("#zelleTotal").textContent = money(total);
  q("#confirmTotal").textContent = money(total);
  q("#formAmount").value = total || "";
}

function changeQty(index, delta) {
  const item = state.cart[index];
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart.splice(index, 1);
  saveCart();
  renderCart();
}

function removeItem(index) {
  state.cart.splice(index, 1);
  saveCart();
  renderCart();
  toast("itemRemoved");
}

function navigate(page) {
  qa(".page").forEach((node) => node.classList.remove("active"));
  const target = document.getElementById(page);
  if (target) target.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (page === "carrinho") renderCart();
  if (page === "zelle" && !state.cart.length) {
    location.hash = "presentes";
    toast("cartEmpty");
  }
}

function handleHash() {
  const page = location.hash.replace("#", "") || "home";
  if (page === "historia") {
    navigate("home");
    setTimeout(() => q("#historia")?.scrollIntoView({ behavior: "smooth" }), 50);
    return;
  }
  navigate(page);
}

function records() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.records) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveRecord(record) {
  const list = records();
  list.unshift(record);
  localStorage.setItem(STORAGE_KEYS.records, JSON.stringify(list));
}

function statusLabel(status) {
  if (status === "paid" || /pago|paid/i.test(String(status))) return t("record.paid");
  return t("record.pending");
}

function renderAdmin() {
  const entries = records();
  q("#statPeople").textContent = entries.length;
  q("#statTotal").textContent = money(entries.reduce((sum, record) => sum + Number(record.amount || 0), 0));
  q("#statPending").textContent = entries.filter((record) => !/pago|paid/i.test(String(record.status))).length;
  q("#adminRows").innerHTML = entries.length
    ? entries
        .map(
          (record) => `
            <tr>
              <td>${record.date || "-"}</td>
              <td>${record.anonymous ? (state.lang === "pt" ? "Anônimo" : "Anonymous") : (record.name || "-")}</td>
              <td>${money(record.amount)}</td>
              <td>${record.items || "-"}</td>
              <td>${statusLabel(record.status)}</td>
              <td>${record.message || ""}</td>
            </tr>`
        )
        .join("")
    : `<tr><td colspan="6">${state.lang === "pt" ? "Nenhum presente registrado neste navegador." : "No gifts recorded in this browser."}</td></tr>`;
}

function applyTranslations() {
  document.documentElement.lang = state.lang === "pt" ? "pt-BR" : "en";
  document.title = translations[state.lang].meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = translations[state.lang].meta.description;

  qa('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const value = t(key);
    if (value !== undefined) el.textContent = value;
  });

  qa('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    const value = t(key);
    if (value !== undefined) el.innerHTML = value;
  });

  qa('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const value = t(key);
    if (value !== undefined) el.placeholder = value;
  });

  qa('[data-i18n-title]').forEach((el) => {
    const key = el.dataset.i18nTitle;
    const value = t(key);
    if (value !== undefined) {
      el.title = value;
      el.setAttribute("aria-label", value);
    }
  });

  qa('[data-i18n-alt]').forEach((el) => {
    const key = el.dataset.i18nAlt;
    const value = t(key);
    if (value !== undefined) el.alt = value;
  });

  qa('.lang-btn').forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
    button.setAttribute("aria-pressed", button.dataset.lang === state.lang ? "true" : "false");
  });
}

function setLanguage(lang) {
  if (lang !== "pt" && lang !== "en") return;
  state.lang = lang;
  localStorage.setItem(STORAGE_KEYS.lang, lang);
  applyTranslations();
  renderGifts();
  renderCart();
  if (!q("#adminPanel").classList.contains("hidden")) renderAdmin();
}

function copyZelleContact() {
  const value = q("#zelleContact").textContent;
  if (navigator.clipboard?.writeText) {
    navigator.clipboard
      .writeText(value)
      .then(() => toast("zelleCopied"))
      .catch(() => toast(value));
  } else {
    toast(value);
  }
}

function shareSite() {
  const data = {
    title: translations[state.lang].meta.title,
    text: translations[state.lang].home.script,
    url: location.href,
  };
  if (navigator.share) {
    navigator.share(data).catch(() => toast("shareError"));
    return;
  }
  if (navigator.clipboard?.writeText) {
    navigator.clipboard
      .writeText(location.href)
      .then(() => toast("linkCopied"))
      .catch(() => toast("copyFallback"));
  } else {
    toast("copyFallback");
  }
}

function bindEvents() {
  qa("[data-page]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      location.hash = link.dataset.page;
    });
  });

  qa(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  q("#addCustom").addEventListener("click", addCustom);
  q("#toZelle").addEventListener("click", () => {
    if (!state.cart.length) {
      toast("cartEmpty");
      return;
    }
    location.hash = "zelle";
  });
  q("#paymentDone").addEventListener("click", () => (location.hash = "confirmar"));
  q("#copyZelle").addEventListener("click", copyZelleContact);
  q("#shareBtn").addEventListener("click", shareSite);

  q("#giftForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const itemText = state.cart
      .map((item) => `${cartItemName(item)} x${item.qty}`)
      .join(" • ") || "Presente personalizado";

    const payload = {
      date: new Date().toLocaleString(state.lang === "pt" ? "pt-BR" : "en-US"),
      name: String(formData.get("name") || "").trim(),
      amount: Number(formData.get("amount") || 0),
      message: String(formData.get("message") || "").trim(),
      anonymous: formData.get("anonymous") === "on",
      paid: formData.get("paid") === "on",
      items: itemText,
      status: "pending",
    };

    const record = { ...payload };
    saveRecord(record);

    const submitBtn = q('#giftSubmitBtn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = state.lang === "pt" ? "Enviando..." : "Sending...";
    }

    const remoteResult = await sendToGoogleSheets(payload);

    if (remoteResult.ok || remoteResult.skipped) {
      toast(state.lang === "pt" ? "Seu presente foi confirmado com sucesso!" : "Your gift was confirmed successfully!");
    } else {
      toast(state.lang === "pt" ? "Registro salvo localmente, mas houve falha no envio para a planilha." : "Saved locally, but the spreadsheet submission failed.");
    }

    state.cart = [];
    saveCart();
    event.target.reset();
    renderCart();
    renderAdmin();

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = state.lang === "pt" ? "🎉 Confirmar meu presente" : "🎉 Confirm my gift";
    }

    setTimeout(() => {
      location.hash = "obrigado";
    }, 300);
  });

  q("#adminEnter").addEventListener("click", () => {
    if (q("#adminPassword").value === "nayara40") {
      q("#adminLogin").classList.add("hidden");
      q("#adminPanel").classList.remove("hidden");
      renderAdmin();
      return;
    }
    toast(state.lang === "pt" ? "Senha incorreta." : "Incorrect password.");
  });

  q("#clearRecords").addEventListener("click", () => {
    const confirmed = confirm(
      state.lang === "pt"
        ? "Apagar todos os registros deste navegador?"
        : "Clear all records from this browser?"
    );
    if (confirmed) {
      localStorage.removeItem(STORAGE_KEYS.records);
      renderAdmin();
    }
  });

  q("#anonymous").addEventListener("change", (event) => {
    if (event.target.checked) toast("anonymous");
  });
}

function initialize() {
  state.cart = state.cart.map(normalizeCartItem).filter(Boolean);
  saveCart();
  bindEvents();
  applyTranslations();
  renderGifts();
  updateCartCount();
  handleHash();
  window.addEventListener("hashchange", handleHash);
}

initialize();

window.addGift = addGift;
window.changeQty = changeQty;
window.removeItem = removeItem;

import { lazy, Suspense } from "react";
import heroImg from "@/assets/hero-agro.jpg";
import discosImg from "@/assets/product-discos.jpg";
import rosetasImg from "@/assets/product-rosetas.jpg";
import bicosImg from "@/assets/product-bicos.jpg";
import caposImg from "@/assets/product-capos.jpg";
import outrasImg from "@/assets/product-outras.jpg";
import factoryImg from "@/assets/factory.jpg";
import {
  Truck,
  Globe2,
  Wrench,
  Headphones,
  ShieldCheck,
  Ruler,
  Sparkles,
  Layers,
  Cog,
  Zap,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Check,
  Package,
  ClipboardList,
  Factory,
  Send,
  Quote,
  Star,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/554532230013?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20pe%C3%A7as%20agr%C3%ADcolas.";

const products = [
  {
    name: "Discos de Plantio",
    img: discosImg,
    desc: "Fabricados em aço de alta resistência, com precisão dimensional para corte uniforme e maior durabilidade no campo.",
  },
  {
    name: "Rosetas",
    img: rosetasImg,
    desc: "Rosetas robustas para plantadeiras, garantindo penetração eficiente no solo e semeadura de qualidade.",
  },
  {
    name: "Bicos para Colheitadeiras",
    img: bicosImg,
    desc: "Bicos usinados com acabamento superior, compatíveis com as principais colheitadeiras do mercado.",
  },
  {
    name: "Capôs para Colheitadeiras",
    img: caposImg,
    desc: "Capôs resistentes com pintura industrial, projetados para longa vida útil mesmo em condições severas.",
  },
  {
    name: "Outras Peças",
    img: outrasImg,
    desc: "Linha completa de componentes de reposição para implementos agrícolas — sob medida para sua operação.",
  },
];

const brands = [
  "John Deere",
  "Semeato",
  "Jumil",
  "Horsch",
  "Baldan",
  "Tatu",
  "Stara",
  "Massey Ferguson",
];

const stats = [
  { icon: Truck, title: "Atendimento em todo Brasil", desc: "Logística ágil de norte a sul." },
  { icon: Globe2, title: "Exportação América do Sul", desc: "Argentina, Paraguai e Bolívia." },
  { icon: Layers, title: "Diversas linhas de produtos", desc: "Amplo portfólio de reposição." },
  { icon: Headphones, title: "Atendimento especializado", desc: "Equipe técnica dedicada." },
];

const differentials = [
  { icon: ShieldCheck, title: "Alta resistência", desc: "Aço tratado para suportar as condições mais exigentes do campo." },
  { icon: Ruler, title: "Precisão de fabricação", desc: "Usinagem CNC com controle rigoroso de tolerâncias." },
  { icon: Sparkles, title: "Matéria-prima selecionada", desc: "Fornecedores homologados e rastreabilidade total." },
  { icon: Cog, title: "Excelente acabamento", desc: "Pintura industrial e tratamento anticorrosivo." },
  { icon: Wrench, title: "Compatibilidade ampla", desc: "Encaixe perfeito com as principais marcas do mercado." },
  { icon: Headphones, title: "Suporte técnico", desc: "Ajudamos na identificação da peça certa para sua máquina." },
  { icon: Zap, title: "Entrega rápida", desc: "Estoque e produção ágil para não parar a sua colheita." },
];

const steps = [
  { icon: Package, title: "Escolha sua peça", desc: "Identifique o modelo compatível com sua máquina." },
  { icon: ClipboardList, title: "Solicite orçamento", desc: "Fale conosco pelo WhatsApp com quantidade e modelo." },
  { icon: Factory, title: "Produção e separação", desc: "Fabricamos e conferimos cada item com rigor." },
  { icon: Send, title: "Envio para todo o Brasil", desc: "Despachamos com transportadoras parceiras." },
];

const testimonials = [
  {
    name: "Revenda parceira (depoimento ilustrativo)",
    role: "Loja de peças agrícolas — PR",
    text: "A qualidade dos discos e a agilidade na entrega fizeram a Boa Safra virar fornecedora fixa da nossa loja.",
  },
  {
    name: "Produtor rural (depoimento ilustrativo)",
    role: "Fazenda de soja — MT",
    text: "Peças que aguentam a safra inteira sem falhar. Suporte técnico direto, sem enrolação.",
  },
  {
    name: "Cooperativa (depoimento ilustrativo)",
    role: "Cooperativa agrícola — RS",
    text: "Preço competitivo e compatibilidade perfeita com nossas plantadeiras John Deere e Semeato.",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Boa Safra Indústria — início">
          <span className="grid h-9 w-9 place-items-center rounded-lg gradient-brand text-primary-foreground shadow-soft">
            <Sparkles className="h-5 w-5" aria-hidden />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-extrabold tracking-tight text-foreground">Boa Safra</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Indústria Agrícola
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Menu principal">
          {[
            ["Produtos", "#produtos"],
            ["Diferenciais", "#diferenciais"],
            ["Marcas", "#marcas"],
            ["Processo", "#processo"],
            ["Contato", "#contato"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand-dark"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">Orçamento</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Colheitadeira e trator trabalhando em campo agrícola ao entardecer"
        width={1920}
        height={1200}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 hero-overlay" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-40">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-glow" aria-hidden />
            Indústria brasileira • Cascavel — PR
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Peças agrícolas de{" "}
            <span className="bg-gradient-to-r from-brand-glow to-white bg-clip-text text-transparent">
              alta performance
            </span>{" "}
            para quem não pode parar.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
            A Boa Safra fabrica peças de reposição com qualidade industrial para garantir máxima
            produtividade no campo — do plantio à colheita.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-cta transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Solicitar Orçamento
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Conheça nossos produtos
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-6 text-white">
            {[
              ["4", "Países atendidos"],
              ["+5", "Linhas de produtos"],
              ["100%", "Fabricação nacional"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl font-extrabold sm:text-3xl">{n}</dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-white/70">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section aria-label="Indicadores" className="border-b border-border/60 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand/40"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-brand-dark transition-colors group-hover:gradient-brand group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-base font-bold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-dark">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{desc}</p>}
    </div>
  );
}

function Products() {
  return (
    <section id="produtos" className="bg-secondary/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Nossos produtos"
            title="Linha completa de peças para plantio e colheita."
            desc="Cada componente é projetado e fabricado com padrão industrial, para operar em alta performance safra após safra."
          />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="hidden text-sm font-semibold text-brand-dark hover:underline lg:inline-flex lg:items-center lg:gap-2"
          >
            Ver todos os produtos <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <article
              key={p.name}
              className={`group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft ${
                i === 0 ? "lg:col-span-2 lg:flex-row" : ""
              }`}
            >
              <div className={`relative overflow-hidden bg-secondary ${i === 0 ? "lg:w-1/2" : ""}`}>
                <img
                  src={p.img}
                  alt={`${p.name} — peça agrícola fabricada pela Boa Safra`}
                  loading="lazy"
                  decoding="async"
                  width={1024}
                  height={1024}
                  className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    i === 0 ? "aspect-[4/3] lg:aspect-auto" : "aspect-[4/3]"
                  }`}
                />
              </div>
              <div className={`flex flex-1 flex-col p-7 ${i === 0 ? "lg:p-10" : ""}`}>
                <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">{p.name}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground sm:text-base">{p.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Solicitar orçamento
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section id="diferenciais" className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative">
            <img
              src={factoryImg}
              alt="Interior da fábrica Boa Safra com maquinário industrial em operação"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1000}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 -right-4 hidden max-w-xs rounded-2xl border border-border bg-card p-5 shadow-soft sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl gradient-brand text-primary-foreground">
                  <ShieldCheck className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">Qualidade industrial</p>
                  <p className="text-xs text-muted-foreground">Rigoroso controle em cada peça.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Por que Boa Safra"
              title="Fabricação nacional com padrão de exportação."
              desc="Cada peça sai da nossa indústria pronta para render — sem improviso, sem retrabalho."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {differentials.map(({ icon: Icon, title, desc }) => (
                <li
                  key={title}
                  className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/40"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-brand-dark">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="mt-4 font-display text-base font-bold text-foreground">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section id="marcas" className="border-y border-border/60 bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Compatibilidade"
          title="Peças compatíveis com as principais marcas do mercado."
          desc="Trabalhamos com padrões dimensionais precisos para garantir encaixe perfeito nas máquinas mais usadas do agronegócio."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((b) => (
            <div
              key={b}
              className="flex items-center justify-center rounded-2xl border border-border bg-card px-6 py-6 text-center font-display text-lg font-extrabold tracking-tight text-foreground/80 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand-dark"
            >
              {b}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Marcas mencionadas apenas para fins de referência de compatibilidade.
        </p>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="processo" className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Como funciona"
          title="Do orçamento à entrega em quatro passos."
          desc="Um processo direto para você receber a peça certa, no prazo certo."
        />
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <li
              key={title}
              className="relative rounded-3xl border border-border bg-card p-7 shadow-card"
            >
              <span className="absolute -top-4 left-7 rounded-full gradient-brand px-3 py-1 font-display text-xs font-bold text-primary-foreground shadow-soft">
                Passo {String(i + 1).padStart(2, "0")}
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-brand-dark">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-secondary/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Quem usa recomenda"
          title="Confiança construída no chão do campo."
          desc="Depoimentos ilustrativos representando o perfil de clientes que atendemos."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-card"
            >
              <Quote className="h-8 w-8 text-brand" aria-hidden />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground">
                “{t.text}”
              </blockquote>
              <div className="mt-6 flex items-center gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <figcaption className="mt-4 border-t border-border pt-4">
                <p className="font-display text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden gradient-brand py-24 sm:py-32">
      <div
        className="absolute inset-0 opacity-20"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.25), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          Precisa de peças agrícolas de confiança?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/90">
          Solicite agora um orçamento com nossa equipe especializada e receba um atendimento
          direto da indústria.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-display text-base font-bold text-brand-dark shadow-cta transition-transform hover:scale-[1.03] sm:text-lg"
        >
          <MessageCircle className="h-6 w-6" aria-hidden />
          Falar no WhatsApp
        </a>
        <p className="mt-5 text-sm text-primary-foreground/80">
          Resposta rápida de segunda a sábado — atendimento em todo o Brasil e América do Sul.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="bg-[oklch(0.16_0.04_150)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_1fr_1.2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-lg gradient-brand shadow-soft">
              <Sparkles className="h-5 w-5" aria-hidden />
            </span>
            <div className="leading-tight">
              <p className="font-display text-lg font-extrabold">Boa Safra</p>
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/60">
                Indústria de Implementos Agrícolas
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm text-white/70">
            Fábrica brasileira de peças de reposição para plantadeiras e colheitadeiras.
            Qualidade industrial, entrega para todo o Brasil e América do Sul.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {["Discos de Plantio", "Rosetas", "Bicos", "Capôs", "Outras peças"].map((i) => (
              <li key={i} className="flex items-center gap-2 text-white/80">
                <Check className="h-4 w-4 text-brand-glow" aria-hidden /> {i}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white/60">
            Contato
          </p>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3 text-white/85">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-glow" aria-hidden />
              <span>
                BR-467, KM 07 — Bairro São Cristóvão
                <br />
                Cascavel — PR • CEP 85813-180
              </span>
            </li>
            <li>
              <a
                href="tel:+554532230013"
                className="flex items-center gap-3 text-white/85 hover:text-white"
              >
                <Phone className="h-5 w-5 text-brand-glow" aria-hidden />
                (45) 3223-0013
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 rounded-full gradient-brand px-4 py-2 font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white/60">
            Onde estamos
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 shadow-soft">
            <iframe
              title="Localização Boa Safra Indústria em Cascavel, PR"
              src="https://www.google.com/maps?q=BR-467+KM+07+Cascavel+PR&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-56 w-full border-0"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Boa Safra Indústria de Implementos Agrícolas. Todos os direitos reservados.</p>
          <p>Cascavel — Paraná — Brasil</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full gradient-brand text-primary-foreground shadow-cta transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}

export function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Stats />
      <Products />
      <Differentials />
      <Brands />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <FloatingWhats />
    </main>
  );
}

export default LandingPage;

// unused imports guard (kept for future use)
void lazy;
void Suspense;
void Mail;
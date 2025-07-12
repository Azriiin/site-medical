
import React from 'react';
import "./index.css";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <header className="fixed top-0 w-full bg-white shadow z-50">
        <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          <div className="text-xl font-semibold text-blue-900">Dr Ayoub</div>
          <div className="space-x-4 hidden md:block">
            <a href="#accueil" className="hover:text-blue-700">Accueil</a>
            <a href="#apropos" className="hover:text-blue-700">À propos</a>
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>
        </nav>
      </header>

      <main className="pt-24 space-y-24">
        <section id="accueil" className="bg-gray-100 text-center py-32 px-4">
          <h1 className="text-4xl font-bold mb-4">Dr Ayoub</h1>
          <p className="text-xl mb-6">Spécialiste en médecine préventive et bien-être</p>
          <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition">Prendre rendez-vous</a>
        </section>

        <section id="apropos" className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">À propos</h2>
          <p className="text-gray-700 leading-relaxed">
            Diplômé de [Université], j'exerce avec une approche centrée sur l'écoute, l'équilibre global et la médecine intégrative.
          </p>
        </section>

        <section id="services" className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">Expertises</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-lg font-medium">Consultation générale</h3>
                <p className="text-sm mt-2 text-gray-600">Prévention, bilans de santé, suivi personnalisé</p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-lg font-medium">Gestion du stress</h3>
                <p className="text-sm mt-2 text-gray-600">Approches naturelles, respiration, conseils personnalisés</p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-lg font-medium">Bien-être nutritionnel</h3>
                <p className="text-sm mt-2 text-gray-600">Alimentation adaptée, micronutrition, conseils de terrain</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-6">Contact</h2>
            <p className="mb-4">📍 Adresse : 123 Rue de la Santé, 75000 Paris</p>
            <p className="mb-4">📞 Téléphone : +33 6 00 00 00 00</p>
            <p className="mb-4">📧 Email : contact@docteur-ayoub.fr</p>
            <a href="https://calendly.com/" target="_blank" rel="noreferrer"
              className="mt-4 inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition">
              Prendre rendez-vous en ligne
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 bg-gray-100 text-sm">
        © {new Date().getFullYear()} Dr Ayoub. Tous droits réservés.
      </footer>
    </div>
  );
}

export default App;

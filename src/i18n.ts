import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Employee Appreciation': 'Employee Appreciation',
      'Enter Employee ID': 'Enter Employee ID',
      'Write your appreciation message...': 'Write your appreciation message...',
      'Add Emoji': 'Add Emoji',
      'Voice to Text': 'Voice to Text',
      'Listening...': 'Listening...',
      'Preview': 'Preview',
      'Employee ID': 'Employee ID',
      'Message': 'Message',
      'Thank you for your hard work!': 'Thank you for your hard work!',
      'You are a valuable member of our team!': 'You are a valuable member of our team!',
      'Your dedication is truly appreciated!': 'Your dedication is truly appreciated!'
    }
  },
  es: {
    translation: {
      'Employee Appreciation': 'Apreciación de Empleados',
      'Enter Employee ID': 'Ingrese ID de Empleado',
      'Write your appreciation message...': 'Escriba su mensaje de aprecio...',
      'Add Emoji': 'Agregar Emoji',
      'Voice to Text': 'Voz a Texto',
      'Listening...': 'Escuchando...',
      'Preview': 'Vista Previa',
      'Employee ID': 'ID de Empleado',
      'Message': 'Mensaje',
      'Thank you for your hard work!': '¡Gracias por tu arduo trabajo!',
      'You are a valuable member of our team!': '¡Eres un miembro valioso de nuestro equipo!',
      'Your dedication is truly appreciated!': '¡Tu dedicación es realmente apreciada!'
    }
  },
  fr: {
    translation: {
      'Employee Appreciation': 'Appréciation des Employés',
      'Enter Employee ID': 'Entrez l’ID Employé',
      'Write your appreciation message...': 'Écrivez votre message d’appréciation...',
      'Add Emoji': 'Ajouter un Emoji',
      'Voice to Text': 'Voix en Texte',
      'Listening...': 'Écoute...',
      'Preview': 'Aperçu',
      'Employee ID': 'ID Employé',
      'Message': 'Message',
      'Thank you for your hard work!': 'Merci pour votre travail acharné!',
      'You are a valuable member of our team!': 'Vous êtes un membre précieux de notre équipe!',
      'Your dedication is truly appreciated!': 'Votre dévouement est vraiment apprécié!'
    }
  },
  de: {
    translation: {
      'Employee Appreciation': 'Mitarbeiteranerkennung',
      'Enter Employee ID': 'Mitarbeiter-ID eingeben',
      'Write your appreciation message...': 'Schreiben Sie Ihre Anerkennungsnachricht...',
      'Add Emoji': 'Emoji hinzufügen',
      'Voice to Text': 'Sprache zu Text',
      'Listening...': 'Hört zu...',
      'Preview': 'Vorschau',
      'Employee ID': 'Mitarbeiter-ID',
      'Message': 'Nachricht',
      'Thank you for your hard work!': 'Danke für Ihre harte Arbeit!',
      'You are a valuable member of our team!': 'Sie sind ein wertvolles Mitglied unseres Teams!',
      'Your dedication is truly appreciated!': 'Ihr Engagement wird sehr geschätzt!'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

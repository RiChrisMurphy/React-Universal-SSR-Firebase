const prodConfig = {
 apiKey: 'AIzaSyAA9GyyuFo_nXcovqeH46WrMlM_3tA8dKM',
 authDomain: 'motivational-2be93.firebaseapp.com',
 databaseURL: 'https://motivational-2be93.firebaseio.com',
 projectId: 'motivational-2be93',
 storageBucket: 'motivational-2be93.appspot.com',
 messagingSenderId: '377610427017'
};

const devConfig = {
 apiKey: 'AIzaSyAA9GyyuFo_nXcovqeH46WrMlM_3tA8dKM',
 authDomain: 'motivational-2be93.firebaseapp.com',
 databaseURL: 'https://motivational-2be93.firebaseio.com',
 projectId: 'motivational-2be93',
 storageBucket: 'motivational-2be93.appspot.com',
 messagingSenderId: '377610427017'
};

export const config =
 process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

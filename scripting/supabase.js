require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL,
  process.env.SUPABASE_API_KEY,
  {
    auth: {
      persistSession: false,
    },
  }
);

const uploadFile = async ({ fileData, filePath }) => {
  const { data, error } = await supabase.storage
    .from('nizhny-koin-ref')
    .upload(`teams/${filePath}`, fileData);
  //   console.log('uploadFile', error, data);
  return { data, error };
};

const insertPlayer = async ({
  playerName,
  playerSurname,
  overall,
  position,
  imageUrl,
  coinID,
  teamID,
}) => {
  const { data, error } = await supabase
    .from('Players')
    .insert([
      {
        playerName: playerName,
        playerSurname: playerSurname,
        overall: overall,
        position: position,
        imageUrl: imageUrl,
        coinID: coinID,
        teamID: teamID,
      },
    ])
    .select();

  return { data, error };
};

module.exports = uploadFile;
module.exports = insertPlayer;

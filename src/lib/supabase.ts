import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Ejemplo de uso futuro:
// export async function getRestaurants() {
//   const { data } = await supabase.from('restaurants').select('*')
//   return data
// }

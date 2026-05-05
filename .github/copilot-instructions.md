# 🎬 PAM-2 React Native/Expo Application

**Project Type**: React Native/Expo mobile app with feature-based architecture  
**Tech Stack**: React 19, React Native 0.81, Expo ~54, React Navigation, Axios  
**Branch**: Aula_05 (currently on Aula_07)

---

## Architecture Overview

### Feature-Based Structure

The app uses a **domain-driven folder structure** where each feature is self-contained:

```
features/
├── movies/                    # Movies feature module
│   ├── screens/              # Feature screens (MovieList, MovieDetails, CreateMovie)
│   ├── components/           # Feature-specific UI components (MovieCard, ActorCard)
│   ├── hooks/                # Business logic (useMovies, useElencoMovies)
│   ├── services/             # API service calls (movieService.js)
│   ├── types.js              # JSDoc type definitions
│   └── index.js              # Public API exports
└── tv/                        # Future TV feature
```

**Key Principle**: Each feature is independent and encapsulated. Screens should import from `features/featureName` using barrel exports.

### Data Flow

```
Screen Component
    ↓ (uses)
Custom Hook (useMovies, useElencoMovies)
    ↓ (calls)
Service Layer (movieService.js)
    ↓ (uses)
Axios API Client (services/api.js)
    ↓ (HTTP request)
TMDB API
```

---

## Development Guidelines

### Component Creation

1. **Create components in feature folders**, not shared `components/` unless used across multiple features
2. **File structure** for new component:
   ```
   features/movies/components/NewComponent/
   ├── index.jsx             # Component code
   └── styles.js             # Styled component with StyleSheet.create()
   ```

3. **Always export from feature index.js** to support barrel imports:
   ```jsx
   // features/movies/index.js
   export { default as MovieCard } from './components/MovieCard';
   ```

### Hooks & State Management

- **No Redux or Context API** - use custom hooks for local state
- **Pattern**: Hooks encapsulate API calls and state, components use hooks for rendering
- Example:
  ```jsx
  // In hook
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => { /* fetch data */ }, []);
  
  // In component
  const { movies, loading, refresh } = useMovies();
  ```

### Services & API Integration

- **Centralized API client**: `services/api.js` with Axios + interceptors
- **Service files** add domain-specific logic (TMDB endpoints, response transformation)
- **API uses env variables**: `EXPO_PUBLIC_API_URL`, `EXPO_PUBLIC_API_KEY`
- **Example**: `getElencoMovie()` transforms API response to standardized Actor format

### Styling Conventions

- **Dark theme** with colors defined in `constants/colors.js`:
  - Primary: `#ff006e` (hot pink)
  - Accent: `#00f5ff` (cyan)
  - Background: `#1a1a1a` (near black)
- **Use `StyleSheet.create()`** in separate `styles.js` files
- **Reference**: [constants/colors.js](constants/colors.js)

### Routing Configuration

- **Centralized routes**: All route names in `constants/routes.js`
- **Usage**: `navigation.navigate(ROUTES.MOVIE_DETAILS, { movie })`
- **Stack navigation**: 4 screens initially (MovieList, MovieDetails, CreateMovie, ActorDetails)

### Type Definitions

- **JSDoc comments** (not TypeScript) to document types
- **Located** in `types.js` within each feature
- **Example**:
  ```jsx
  /**
   * @typedef {Object} Movie
   * @property {number} id
   * @property {string} title
   * @property {string} poster_path
   */
  ```

---

## Build & Development Commands

| Command | Purpose |
|---------|---------|
| `npm start` | Start Expo dev server (iOS/Android/Web) |
| `npm run android` | Run on Android emulator |
| `npm run ios` | Run on iOS simulator |
| `npm run web` | Run in web browser |

---

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Folders | kebab-case | `movie-list/`, `actor-details/` |
| Files | camelCase (JS), PascalCase (components) | `movieService.js`, `MovieCard.jsx` |
| Functions | camelCase | `getPopularFilmes()`, `useMovies()` |
| Components | PascalCase | `MovieCard`, `ActorDetails` |
| Constants | UPPER_SNAKE_CASE | `ROUTES.MOVIE_DETAILS` |

---

## Common Patterns

### Fetching Data in a Screen

```jsx
// Hook handles API logic
const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const data = await movieService.getPopularFilmes();
      setMovies(data);
      setLoading(false);
    };
    fetch();
  }, []);

  return { movies, loading, refresh: fetch };
};

// Component uses the hook
const MovieList = () => {
  const { movies, loading } = useMovies();
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => <MovieCard movie={item} />}
      numColumns={2}
    />
  );
};
```

### Adding a New Endpoint

1. Add function to `features/[feature]/services/[featureService].js`
2. Transform response if needed (e.g., remap API fields)
3. Create/use a hook in `features/[feature]/hooks/use*.js` to call it
4. Use the hook in your screen component

---

## Important Notes

- **TMDB API**: Currently fetches popular movies and cast data. Requires valid API key in env
- **No error boundaries**: Basic try-catch used; consider adding error UI for failed states
- **Environment**: Uses `EXPO_PUBLIC_*` prefixed variables for exposure to bundler
- **Dark theme enforced** in navigation options (see `AppRoutes` config)

---

## File References

- **Routing**: [routes/app.routes.jsx](routes/app.routes.jsx)
- **API Setup**: [services/api.js](services/api.js)
- **Theme Colors**: [constants/colors.js](constants/colors.js)
- **Constants**: [constants/routes.js](constants/routes.js), [constants/config.js](constants/config.js)
- **Example Feature**: [features/movies/](features/movies/)

---

## When Adding Features

Follow this checklist:

- [ ] Create folder under `features/[newFeature]/`
- [ ] Add `screens/`, `components/`, `hooks/`, `services/` folders
- [ ] Create `types.js` with JSDoc definitions
- [ ] Create `index.js` with barrel exports
- [ ] Add service functions in `services/[newFeature]Service.js`
- [ ] Create hooks in `hooks/use*.js`
- [ ] Add route constants to `constants/routes.js`
- [ ] Update navigation in `routes/app.routes.jsx`

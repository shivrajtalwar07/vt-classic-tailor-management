import React, { useState } from 'react';
import { Upload, Sparkles, Image as ImageIcon, Loader2 } from 'lucide-react';
import axios from 'axios';

const AIChatbot = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
      setSuggestion('');
      setError('');
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setError('');
    
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('http://localhost:3000/api/ai/suggest', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setSuggestion(response.data.suggestion);
    } catch (err) {
      console.error(err);
      setError('Failed to analyze image. Ensure the backend is running and the Gemini API key is configured.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-neutral-950 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif text-amber-500 mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8" />
            AI Stylist
          </h1>
          <p className="text-neutral-400">Upload your image and our AI will suggest the perfect clothing styles for you.</p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow-2xl">
          <div className="mb-8">
            <label 
              htmlFor="image-upload" 
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-neutral-700 hover:border-amber-500/50 rounded-xl cursor-pointer bg-neutral-950/50 transition-colors"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="h-48 object-contain rounded" />
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-neutral-500 mb-4" />
                    <p className="text-neutral-400 mb-2 font-medium">Click to upload image</p>
                    <p className="text-neutral-600 text-sm">PNG, JPG or JPEG</p>
                  </>
                )}
              </div>
              <input 
                id="image-upload" 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="flex justify-center mb-8">
            <button
              onClick={analyzeImage}
              disabled={!selectedImage || loading}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:bg-neutral-800 disabled:text-neutral-500 text-neutral-950 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              {loading ? 'Analyzing...' : 'Get Style Suggestions'}
            </button>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg mb-6 text-center">
              {error}
            </div>
          )}

          {suggestion && (
            <div className="bg-neutral-950 border border-amber-500/30 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
              <h3 className="text-xl font-serif text-amber-500 mb-4">Recommended Styles</h3>
              <div className="text-neutral-300 leading-relaxed whitespace-pre-wrap">
                {suggestion}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;

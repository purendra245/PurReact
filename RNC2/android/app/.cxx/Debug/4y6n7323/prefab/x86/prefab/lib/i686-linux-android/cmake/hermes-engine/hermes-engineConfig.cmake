if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/tjha/.gradle/caches/8.14.1/transforms/a79e9b387fece8eb6cbb29198ec70688/transformed/jetified-hermes-android-0.80.1-debug/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/tjha/.gradle/caches/8.14.1/transforms/a79e9b387fece8eb6cbb29198ec70688/transformed/jetified-hermes-android-0.80.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()


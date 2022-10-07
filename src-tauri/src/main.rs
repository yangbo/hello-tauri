#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// use tauri::Manager;

use serde::{Deserialize, Serialize};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[derive(Serialize, Deserialize, Debug)]
struct MyFile {
    name: String,
    size: u32,
}

#[derive(Serialize, Deserialize, Debug)]
struct Data {
    data: Vec<u8>,
    meta: String,
}

struct 数据结构 {}

fn 我的函数() {}

struct Geo文件 {}

#[tauri::command]
fn open_file(file_to_open: MyFile) -> Data {
    println!("The file to open: {}", file_to_open.name);

    let 老师: String = "杨老师".into();
    println!("{}", 老师);

    // 返回数据
    Data {
        data: vec![7; 10*1024],
        meta: "元数据 meta-info".into(),
    }
}

fn main() {
    tauri::Builder::default()
        // .setup(|app| {
        //     #[cfg(debug_assertions)] // only include this code on debug builds
        //     {
        //         let window = app.get_window("main").unwrap();
        //         window.open_devtools();
        //         window.close_devtools();
        //     }
        //     Ok(())
        // })
        .invoke_handler(tauri::generate_handler![greet, open_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

    我的函数();
}
